import Head from 'next/head';

//stateless functional component -- a lot of the state is handled in the other high order components
const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon.png" />
    <link rel="stylesheet" href="/static/nprogress.css" type="text/css" />
    <title>Sick Fits!</title>
  </Head>
);

export default Meta;