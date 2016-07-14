import Backbone from 'backbone';
import moment from 'moment';

import user from './username';
import Member from './Members';

const BlogPost = Backbone.Model.extend({
  urlRoot     : 'https://tiny-za-server.herokuapp.com/collections/tgBlog',
  idAttribute : '_id',
  defaults: {
              username: user.username,
              timestamp: moment().format( 'MMMM Do YYYY' ),
            }
});

export default blogPost;
