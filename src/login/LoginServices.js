export function authenticate({ email, password }) {
  if (['aaa@a.com', 'bbb@a.com'].includes(email) && password === '12345') {
    return {
      message: 'login successful',
    };
  }
  throw new Error('invalid credential');
}
