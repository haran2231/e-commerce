const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
      user: 'haran2231@gmail.com',
      pass: 'hxty zewp gjuv bhkk'
    }
  });

  const mailOptions = {
    from: 'haran2231@gmail.com',
    to,
    subject,
    text
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

const generateBillText = (order) => {
  let billText = `Bill\n\nOrder ID: ${order._id}\n`;
  billText += `Name: ${order.shippingDetails.name}\n`;
  billText += `Address: ${order.shippingDetails.address}\n`;
  billText += `City: ${order.shippingDetails.city}\n`;
  billText += `Postal Code: ${order.shippingDetails.postalCode}\n\n`;
  
  billText += 'Items:\n';
  order.items.forEach(item => {
    billText += `Product: ${item.productName}, Price: $${item.price}\n`;
  });

  billText += `\nTotal: $${order.items.reduce((total, item) => total + item.price, 0).toFixed(2)}`;
  
  return billText;
};

module.exports = { sendEmail, generateBillText };
