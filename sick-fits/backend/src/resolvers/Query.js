const Query = {
  dogs(parent, args, ctx, info){
    //db calls go here
    // return [{ name: 'Basel' }, { name: 'Sybil' }];
    global.dogs = global.dogs || [];
    return global.dogs;
  },
};

module.exports = Query;
