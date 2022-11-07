import nodemailer from 'nodemailer';
import { MailInfo, MAIL_ID } from '../config.js';

const transporter = nodemailer.createTransport(MailInfo);

const createHhml = (username) => {
  return `
    <header>
      <h1>Dear, ${username}</h1>
      <p>Welcome to B&M!</p>
    </header>
    <main>
      <p>가입을 완료하기 위해 다음 링크를 눌러주세요.</p>
      <a href="#">인증하기</a>
    </main>
  `;
};

export const mailer = async ({ username, email }) => {
  const mailOption = {
    from: MAIL_ID,
    to: email,
    subject: 'B&M 가입 인증',
    test: 'B&M 가입 인증 메일입니다.',
    html: createHhml(username),
  };

  const info = await transporter.sendMail(mailOption);
};

mailer({ username: 'LNSol', email: 'dmsgk1559@naver.com' });
