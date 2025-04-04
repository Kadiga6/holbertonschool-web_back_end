export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      const response = {
        status: 200,
        body: 'Success',
      };
      resolve(response);
    }
    if (success === false) {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
