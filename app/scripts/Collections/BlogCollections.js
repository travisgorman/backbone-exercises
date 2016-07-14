import Backbone from 'backbone';
import blogPost from '../models/blogPost';

const BlogCollection = Backbone.Collection.extend({
  url  : 'https://tiny-za-server.herokuapp.com/collections/tgBlog',
  model: blogPost
});

let blogCollection = new BlogCollection();

export default blogCollection;
