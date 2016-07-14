import $ from 'jquery';
import Backbone from 'backbone';
import router from '../router';
import Member from '../models/member';
import blogPost from '../models/blogPost';
import user from '../models/username';

function renderBlogPostForm() {
    let $newblogPostForm = $(`

      <div class="joinBox">
        <form>
          <input id="title" type="text" name="title" placeholder="title">
          <textarea id="body" name="body" placeholder="write all your things here"></textarea>
          <input id="submit" type="submit" name="submit" value="submit">
        </form>
      </div>

    `);

  $newblogPostForm.find( '#submit' ).on( 'click', function( evt ) {
    evt.preventDefault();
    let blogPost = new BlogPost({
        title : $( '#title' ).val(),
        body  : $( '#body' ).val()
    });

    blogPost.save( null, {
        success: function( response ) {
          router.navigate( 'blogPosts', { trigger: true });
        }
    });
  });
  return $newBlogPostForm;
}

export default renderBlogPostForm;
