<script>
function doOnce() {
  if (document.cookie.replace(/(?:(?:^|.*;\s*)doSomethingOnlyOnce\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
    document.getElementById('custom-alert').classList.add('show');
    document.cookie = "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  }
}
function removeClass() {
    document.getElementById('custom-alert').classList.remove('show'); 
$( ".is-section.is-section-margin-0.kol-editable-section.is-light-text.is-box.is-section-auto.is-align-left" ).addClass( "hide" );
}
window.addEventListener('load', function() {
  doOnce()
if($('.alert-div').hasClass('show')){
$( ".is-section.is-section-margin-0.kol-editable-section.is-light-text.is-box.is-section-auto.is-align-left" ).addClass( "block" );
}
else{
$( ".is-section.is-section-margin-0.kol-editable-section.is-light-text.is-box.is-section-auto.is-align-left" ).removeClass( "block" ).addClass( "hide" );
}
})

$(document).on('kol:knownlead', function(e, lead){
$('#kol_referral_count').html(lead.referrals);
$('#kol_contest_score').html(lead.contest_score);
}); 
</script>