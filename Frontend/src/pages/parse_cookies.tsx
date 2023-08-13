import { setCookie } from 'nookies';
import { parseCookies } from 'nookies';

export async function getServerSideProps() {
    const cookies = parseCookies();
    const myCookie = cookies.jwt;
    console.log('myCookie : ', myCookie);
  return {
    props: {
        myCookie,
    },
  };
}