import { setCookie } from 'nookies';
import { parseCookies } from 'nookies';
import { parse } from 'cookie';


export async function getServerSideProps(context : any) {
  const cookieHeader = context.req.headers.cookie;
  const myCookie = parse(cookieHeader || '');
  const jwt = myCookie.jwt;
  // console.log('jwt : ', jwt);
  return {
    props: {
      jwt: jwt ? jwt : null,
    },
  };
}