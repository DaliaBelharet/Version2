const UserModel = require('../models/user.model');
const { signUpErrors, signInErrors } = require('../utils/error.utils');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (id) => {
   return jwt.sign({id}, process.env.TOKEN_SECRET,{
      expiresIn: maxAge
   })
}

module.exports.signUp = async (req, res) => {
    const {nomComplet, email, password, phoneNumber} = req.body;
    
    try {  
      const user = await UserModel.create({nomComplet, email, password, phoneNumber});
  
        res.status(201).json({user: user._id});
    } catch (err) {
      // const errors = signUpErrors(err) 
      res.status(200).json(err);
    }
 }

 module.exports.signIn = async (req, res) => {
  const {email, password} = req.body
  try {
     const user = await UserModel.login(email, password);
     const token = createToken(user._id);
     res.cookie('jwt', token, {httpOnly: true, maxAge});
     res.status(200).json({user: user._id})
  }
  catch (err) {
     const errors = signInErrors(err) 
     res.status(200).json({errors});
  }
}


module.exports.logOut = (req, res) => {
  
   res.cookie('jwt', '',{maxAge: 1});
   res.redirect('/');
   console.log("logoutback");
}

// Fonction pour générer un code OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// Route pour demander la réinitialisation du mot de passe
exports.demanderResetMotDePasse = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    const trustedEmail = user.trustedEmail;

        // Générer un code OTP
        const otp = generateOTP();

        // Envoyer le code par e-mail
        await nodemailer.sendMail({
            from: 'daliabelharett@gmail.com',
            to: trustedEmail,
            subject: 'Réinitialisation du mot de passe',
            text: `Votre code de réinitialisation du mot de passe est : ${otp}`,
        });

        // Mettre à jour le modèle utilisateur avec le code OTP et sa date d'expiration
        user.resetToken = otp;
        user.resetTokenExpiration = Date.now() + 5 * 60 * 1000; // Expiration dans 5 minutes
        await user.save();

        res.status(200).json({ message: 'Un e-mail avec le code de réinitialisation a été envoyé à votre adresse de confiance' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la demande de réinitialisation de mot de passe' });
    }
};

// Route pour réinitialiser le mot de passe avec le code OTP
exports.resetMotDePasse = async (req, res) => {
  const { email, otp, nouveauMotDePasse } = req.body;

  try {
    const user = await UserModel.findOne({
      email,
      resetToken: otp,
      resetTokenExpiration: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: 'Code de réinitialisation invalide ou expiré' });
    }

    // Afficher le mot de passe avant le hachage
    console.log('Password before hashing:', nouveauMotDePasse);

    // Utiliser bcrypt.genSalt pour générer le sel
    const salt = await bcrypt.genSalt(10);
    
    // Utiliser bcrypt.hash pour générer le hachage avec le sel
    const hashedPassword = await bcrypt.hash(nouveauMotDePasse, salt);

    console.log('Updated password:', hashedPassword);

    await user.updateOne({password:hashedPassword})
    user.resetToken = null;
    user.resetTokenExpiration = null;
    await user.save();

    res.status(200).json({ message: 'Le mot de passe a été réinitialisé avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la réinitialisation du mot de passe' });
  }
};
