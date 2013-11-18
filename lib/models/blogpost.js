'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var BlogPostSchema = new Schema({
  title: {
    type: String,
    index: true,
    required: true
  },
  content: {
    type: String,
    default: '',
    trim: true
  },
  slug: {
    type: String,
    lowercase: true,
    trim: true
  },
  created: Date,
  updated: [Date],
  creator: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

/**
 * Pre hook.
 */

BlogPostSchema.pre('save', function(next, done){
  if (this.isNew)
    this.created = Date.now();

  this.updated.push(Date.now());

  next();
});

/**
 * Statics
 */
BlogPostSchema.statics = {
  load: function(id, cb) {
    this.findOne({
      _id: id
    }).populate('creator', 'username').exec(cb);
  }
};

/**
 * Methods
 */

BlogPostSchema.statics.findByTitle = function (title, callback) {
  return this.find({ title: title }, callback);
}

BlogPostSchema.methods.expressiveQuery = function (creator, date, callback) {
  return this.find('creator', creator).where('date').gte(date).run(callback);
}

/**
 * Plugins
 */

function slugGenerator (options){
  options = options || {};
  var key = options.key || 'title';

  return function slugGenerator(schema){
    schema.path(key).set(function(v){
      this.slug = v.toLowerCase().replace(/[^a-z0-9]/g, '').replace(/-+/g, '');
      return v;
    });
  };
};

BlogPostSchema.plugin(slugGenerator());

/**
 * Define model.
 */

mongoose.model('BlogPost', BlogPostSchema);