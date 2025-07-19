

$(function(){
    console.log("Content script loaded");
    chrome.storage.local.get(['imageUrl'],function(response){
        console.log("response",response)
        if(response.imageUrl){
            document.body.style.backgroundImage = `url(${response.imageUrl})`;
            $('body').css({"background-size":"cover","background-attachment":"fixed"});
            // $('#fbar').css('background','none');
            $('.c93Gbe').css('background','none');
        }
    })
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if(request.todo==="changeBg"){
            console.log("response",request)
            if(request.imageUrl){
                document.body.style.backgroundImage = `url(${request.imageUrl})`;
                $('body').css({"background-size":"cover","background-attachment":"fixed"});
               $('.c93Gbe').css('background','none');
               chrome.tabs.reload(request.tab, function() {
                    console.log("Tab reloaded.");
                });
            }
         
        }
    });
})
// "background-image":`url(${response.imageUrl})`,
// chrome.tabs.reload(tabs[0].id, function() {
//     console.log("Tab reloaded.");
// });