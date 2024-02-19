import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';
import { SharedService } from './shared.service';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';

 describe('CalcService', () => {
  // let calc: CalcService;
   let shared: SharedService;

  let calc: CalcService;

  // it('should add two numbers', () => {
  //   const calc = new CalcService(shared);
  //   expect(calc.add(1, 9)).toBe(2);
  // });

  it('should multiply two numbers', () => {

  });
  /* FIRST TEST */
  // it('should be created', () => {
  //   calc = new CalcService();
  //   expect(calc).toBeTruthy();
  // });

  /* SECOND TEST */
  // it('should add two numbers', () => {
  //   const service = new CalcService();
  //   const result = service.add(1, 2);
  //   expect(calc).toBe(result);
  // });


 

  /* SPY TEST */
  it('should call randomize function', () => {
    //const shared = new SharedService();
    //const shared = jasmine.createSpyObj('SharedService', ['randomize']); // using mock object
    spyOn(shared, 'randomize').and.callFake(() => {
      console.log('fake randomize');
    });

    const calc = new CalcService(shared);
    calc.multiply(2, 3);
    expect(shared.randomize).toHaveBeenCalled();
  });


/* Before Each & TestBed */

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalcService, SharedService]
    });
    calc = TestBed.inject(CalcService);
    shared = TestBed.inject(SharedService);
  });
 
  // /* Parameterized TEST */
  it('should add two numbers', () => {
    const testCases = [
      { a: 1, b: 2, expected: 3 },
      { a: -4, b: 5, expected: 1 },
      { a: 0, b: 10, expected: 10 },
      { a: -2, b: -3, expected: -5 },
    ];

    testCases.forEach((testCase) => {
      const result = calc.add(testCase.a, testCase.b);
      expect(result).toBe(testCase.expected);
    });
  });


  /* FIT & XIT */
  // fdescribe('My Test Suite', () => {
  //   it('should run this test only', () => {
  //     // Test code here. This will run.
  //   });
  
  //   it('should not run this test', () => {
  //     // Test code here. This will be skipped because of the fit above.
  //   });
  
  //   xit('should be marked as pending and not run', () => {
  //     // Test code here. This will not run because it's excluded.
  //   });
  // });



//  it('Add two numbers with testbed injecting service: ', () => { 
//   let calc = TestBed.inject(CalcService);
//   let expected = calc.add('1', 2);
//   expect(expected).toBe('12');
//  });

  
  


  // it('should call randomize function', () => {
  //   const shared = new SharedService();
  //   spyOn(shared, 'randomize').and.callFake(() => {
  //     console.log('fake randomize');
  //   });
  //   let service= new CalcService(shared);
  //   service.multiply(2, 3);
  //   expect(shared.randomize).toHaveBeenCalled();
  // });


  // it('should subtract two numbers', () => {
  //   expect(service.subtract(5, 3)).toBe(2);
  //   expect(service.subtract(10, 5)).toBe(5);
  //   expect(service.subtract(0, 0)).toBe(0);
  //   expect(service.subtract(-5, -10)).toBe(5);
  // });

  // it('should multiply two numbers', () => {
  //   expect(service.multiply(2, 3)).toBe(6);
  //   expect(service.multiply(-4, 5)).toBe(-20);
  //   expect(service.multiply(0, 10)).toBe(0);
  //   expect(service.multiply(-2, -3)).toBe(6);
  // });

  // it('should divide two numbers', () => {
  //   expect(service.divide(10, 2)).toBe(5);
  //   expect(service.divide(-15, 3)).toBe(-5);
  //   expect(service.divide(0, 5)).toBe(0);
  //   expect(service.divide(-10, -2)).toBe(5);
  // });

});
