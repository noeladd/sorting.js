describe ('Bubble Sort', function (){
  it('handles an empty array', function(){
    expect ( bubbleSort([]) ).toEqual( [] );
  });

  it ('handles an array of 1 item', function(){
    expect ( bubbleSort([1]) ).toEqual( [1] );
  });

  it ('handles an array of multiple items', function(){
   var result =  bubbleSort([5, 4, 3, 1, 2])
    expect (result ).toEqual([1, 2, 3, 4, 5]);
  });

  // it ('returns correct number of calls', function(){
  //   var result =  bubbleSort.call(this,([5, 4, 3, 1, 2])
  //   expect (this.counter).toEqual(4);
  // });
})
