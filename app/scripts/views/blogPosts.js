import $ from 'jquery';
import Backbone from 'backbone';

import router from '../router';
import user from '../models/username';

// import memberCollection from '../collections/memberCollection';
import Member from '../models/member';
import  from './postMemberForm';

import blogCollection from '../collections/blogCollection';
import blogPost from '../models/blogPost';
import renderblogPostForm from './postBlogForm';

function renderblogPosts() {
    let $blogList = $(`
      <div class="side-blog-list">
        <ul>
        </ul>
      </div>
    `);
    function addToList( model ) {
        let $list = $(`

          <li>
            <h2>${ model.get( 'username' ) }</h4>
            <h3>${ model.get( 'title' ) }</h3>
            <p>${ model.get( 'body' ) }</p>
          </li>

        `);
        $blogList.find( 'ul' ).append( $list );
    }
    blogCollection.forEach( addToList );
    blogCollection.on( 'add', addToList );
    blogCollection.fetch();
    let $sideBlog = $(`

      <ul id="blog">
        <li><li>
      </ul>

    `);
  return $blogList;
}

export default renderblogPosts;
