console.log("Email Writer Extension - Content Script Loaded");
function createAIButton(){
    const button = document.createElement('div');
    button.className= 'T-I J-J5-Ji ao0 v7 T-I-atl L3';
    button.style.marginRight='8px';
    button.innerHTML='AI Reply';
    button.setAttribute('role', 'button');
    button.setAttribute('data-tooltip', 'Genrate AI Reply');
    return button;    

}
function getEmailContent(){
    const selectors=[
        '.h7', '.a3s.ail', 'gmail_quote',
        '[role="presentation"]'
    ];
    for(const selector of selectors){
        const Content = document.querySelector(selector);
        if(Content){
            return Content.innerText.trim();
        }
    }
        return '';
    }



function findComposeToolbar(){
    const selectors=[
        '.btC .aDh','.btc [role="toolbar"]',
        '.gU.Up',
        '[role="toolbar"]'
    ];
    for(const selector of selectors){
        const toolbar = document.querySelector(selector);
        if(toolbar){
            console.log("Toolbar matched :", selector, toolbar);
            return toolbar;
        }
    }
    console.log("No toolbar found with any selector");
    return null;
}

function injectButton() {
    const existingButton = document.querySelector('ai-reply-button');
    if(existingButton) existingButton.remove();
    const toolbar = findComposeToolbar();
    if (!toolbar) {
        console.log("Toolbar not found"); 
        return;
    }
    console.log("Toolbar found, creating AI button");
    const button = createAIButton();
    button.classList.add('ai-reply-button');
    button.addEventListener('click', async() => {
        try{
            button.innerHTML='Generating...';
            button.disabled=true;
            const emailContent=getEmailContent();
            const response = await fetch('http://localhost:8080/api/email/generate', {method:'POST', headers:{
                'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                   emailContent: emailContent,
                    tone : "professional",
})
            });
            if(!response.ok){
                throw new Error('Api Request Failed');

            }
            const generatedReply = await response.text();
            const composeBox=document.querySelector('[role="textbox"][g_editable="true"]');
            if(composeBox){
                composeBox.focus();
                document.execCommand('insertText', false, generatedReply);
            }
            else{
                console.error('Compose box was not found');
            }


        } catch(error){
           console.error(error);
            alert('failed to generate AI reply:', + error.message);
        }
        finally{
            button.innerHTML='AI Reply';
            button.disabled=false;
        }

    });
    toolbar.insertBefore(button, toolbar.firstChild);
    
}
const observer = new MutationObserver((mutations) => {
    for( const mutation of mutations) {
        const addedNodes = Array.from(mutation.addedNodes);
        const hasComposeElements = addedNodes.some(node => node.nodeType=== Node.ELEMENT_NODE && (node.matches(' .sDh, .btC, [role="dialog"]') || node.querySelector('.sDh, .btC, [role="dialog"]'))


        );
        if(hasComposeElements){
            console.log("Compose window detected");
            setTimeout(injectButton, 500);
        }
    }
});
observer.observe(document.body, { childList: true, subtree: true });