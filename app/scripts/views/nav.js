import $ from 'jquery';
import router from '../router';

function renderNav () {
  let $nav = $(`

      <ul class="nav">
        <li>read</li>
        <li>write</li>
        <li>join</li>
      </ul>

  `);
  $nav.find( 'li' ).on( 'click', function( evt ){
    evt.preventDefault();
    // console.log( $( this ));
    let navLink = $( this )[0].innerText.toLowerCase();
    router.navigate( navLink, { trigger: true } );
  } );

  return $nav;
}

export default renderNav;
