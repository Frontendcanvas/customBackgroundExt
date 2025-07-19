$(function() {


    $('#submitbtn').click(function() {
       var image = $('#imagelink').val();
       chrome.storage.local.set({'imageUrl':image},function(){
            chrome.tabs.query({active:true,currentWindow:true},function(tabs){
            console.log("image",tabs[0].id,tabs[0].title);
       var image = $('#imagelink').val();
       var image = $('#imagelink').val();
            chrome.tabs.sendMessage(tabs[0].id,{todo:"changeBg",imageUrl:image,tab:tabs[0].id})
        });
        });
    });

    
});