import React from 'react';

const DeploymentDoc = () => {
  return (
    <div className="py-5">
      <div
        dangerouslySetInnerHTML={{
          __html: `<p><span style="font-size:20px"><strong>Deployment Instructions are as follows</strong></span></p>

        <p><span style="font-size:14px"><strong><em>Pre deployment steps</em></strong></span></p>
        
        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="font-size:14px"> &nbsp;Create an optimized production build from your frontend root folder</span></p>
        
        <p><span style="font-size:14px">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;npm run build</span></p>
        
        <p><span style="font-size:14px">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;This will create build folder with all assets that need to be uploaded. The above process is manual method, thus we will not use this method.</span></p>
        
        <p><span style="font-size:14px"><strong><em>Prepare optimized production ready build by adding following to backend server.js</em></strong></span></p>
        
        <p><span style="font-size:14px">Added this code to my backend&#39;s server.js file</span></p>
        
        <pre>
        <code class="language-javascript">if(process.env.NODE_ENV === 'production'){
        
          app.use(express.static(path.join(__dirname,'/frontend/build')));
        
        app.get('*',(req,res)=&gt;res.sendFIle(path.resolve(__dirname,'frontend','build','index.html')))
        
        }else{
        
        app.get('/',(req,res)=&gt;{
        
        res.send('Server is up and running....')
        
        })</code></pre>
        
        <p>&nbsp;</p>
        
        <p><span style="font-size:20px"><strong>Deployment to Heroku</strong></span></p>
        
        <p><span style="font-size:16px"><em>Setup heroku first</em></span></p>
        
        <ol>
          <li><span style="font-size:14px">Create heroku account if not created earlier</span></li>
          <li><span style="font-size:14px">Download and install Heroku CLI to your desktop/laptop</span></li>
          <li><span style="font-size:14px">Login to Heroku from project root folder, run&nbsp;</span></li>
          <li><span style="font-size:14px">heroku login&nbsp; -&gt; It will open broswer</span></li>
          <li><span style="font-size:14px">Once login close the broswer window and come back to ternminal&nbsp;</span></li>
          <li><span style="font-size:14px">Now create heroku project with&nbsp;&nbsp;</span></li>
        </ol>
        
        <pre>
        <code>heroku create &lt;your_app_name&gt;</code></pre>
        
        <p>&nbsp; &nbsp; &nbsp;<span style="font-size:14px">(your_name) must be unique</span></p>
        
        <p><span style="font-size:14px">&nbsp; &nbsp; &nbsp;e.g geroku create mern-hacker-ranking-sys</span></p>
        
        <p><span style="font-size:14px">&nbsp; &nbsp; &nbsp; It will show project website URL and git repo</span></p>
        
        <p><span style="font-size:14px">&nbsp; &nbsp; &nbsp; &nbsp; 7. In root of the project create file called Procfile with following contain</span></p>
        
        <pre>
        <code> web:node backend/server.js</code></pre>
        
        <p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="font-size:14px">8. In root of the project directory add following to package.json file</span></p>
        
        <pre>
        <code> "heroku-postbuild" : "NPM_CONFIG_PRODUCTION = false npm install --prefix frontend &amp;&amp; npm run build --prefix frontend" </code></pre>
        
        <p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="font-size:14px">9. Add heroku as remote repo</span></p>
        
        <pre>
        <code>heroku git:remote -a &lt;your-app-name&gt;</code></pre>
        
        <p><span style="font-size:14px">&nbsp; &nbsp; &nbsp; &nbsp; 10. Run this command to push to Heroku</span></p>
        
        <pre>
        <code>git push heroku master</code></pre>
        
        <p><span style="font-size:14px">&nbsp; &nbsp; &nbsp; &nbsp; 11. After successfull build website will be live</span></p>
        
        <p><span style="font-size:14px">&nbsp; &nbsp; &nbsp; &nbsp; 12. Go to heroku dashboard and under setting, we will find config vars</span></p>
        
        <p><span style="font-size:14px">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Add all your environmnet variable there.</span></p>
        `
        }}
      />
    </div>
  );
};

export default DeploymentDoc;
