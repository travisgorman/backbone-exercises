import $ from 'jquery';
import Backbone from 'backbone';
import moment from 'moment';
import user from './username';

const Member = Backbone.Model.extend({
  urlRoot     : 'https://tiny-za-server.herokuapp.com/collections/tgBlog',
  idAttribute : '_id',
  defaults: {
              username: user.username,
              joinedOn: moment().format( 'MMMM Do YYYY' ),
            }
});

export default Member;
