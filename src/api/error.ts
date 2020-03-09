export default async function error(error: any) {
  if (error.response) {
    // The request was made and the server responded with a status code that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    console.log(error.request);
  } else {
    // Something happened in setting up the request and triggered an Error
      console.log('Error', error.message);
  }
  console.log(error);
}