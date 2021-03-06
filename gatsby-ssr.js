import React from 'react';

export function onRenderBody({ setPostBodyComponents }){
    setPostBodyComponents([
        <script
            key="added_plugin_tawk.to"
            type="text/javascript"
            dangerouslySetInnerHTML={{
                __html:`
                    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                    (function(){
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true;
                    s1.src='https://embed.tawk.to/60ab4471bbd5354c0fdbba27/1f6eg6nsk';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);
                    })();
                `
            }}
        />,
        <script key="fb_chat" id="fb_chat" type="text/javascript" />
    ])
}