describe("Triangle", function() {
    
  it("should display an example of successful test specification", function() { 
      var res = 2;
      expect(res).toBe(2);
      expect(res).not.toBe(null);
      expect([1,2,3]).toEqual([1,2,3]);
  });   
  
  it("should display an example of failed specification", function() { 
      expect(2+2).toBe(5);
  });
  
  it("should...", function() { 
      pending();
  });  
 
});
