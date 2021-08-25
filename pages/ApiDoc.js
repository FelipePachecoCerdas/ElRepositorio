import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { createSwaggerSpec } from 'next-swagger-doc';
import React, { useState, useEffect } from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const ApiDoc = ({ specDefault }) => {

  const [ spec, setSpec] = useState(specDefault)

  useEffect(async () => {
    const req = await fetch(`${window.location.origin}/api/doc`);
    const specT = await req.json()
    console.log(specT, specDefault);
    setSpec(specT);
  }, [])

  return <SwaggerUI spec={spec} />;
};

export const getStaticProps = async ctx => {
  
  //const a = await fetch("")
  const spec = createSwaggerSpec({
    title: 'NextJS Swagger',
    version: '0.1.0',
  });
  return {
    props: {
      spec,
    },
  };
};

export default ApiDoc;