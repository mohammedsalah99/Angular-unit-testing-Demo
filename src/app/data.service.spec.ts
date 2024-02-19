import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule ,HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { USERS } from './mock-data/users';
fdescribe('DataService', () => {
  let service: DataService;
  let testingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users', () => {
    service.getAllUsers().subscribe((users: any) => { 
      expect(users).toBeTruthy();
      expect(users.length).toBe(4);
      //expect(users[1].name).toBe('Ibrahim Hassan');
      const secondUser = users.find((user: any) => user.id === 2);
      expect(secondUser.name).toBe('Ibrahim Hassan');
    });
    const mockReq = testingController.expectOne('api/users/');
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(Object.values(USERS));
  });

  it('should get user by id', () => {
    service.getUserById(4).subscribe((user: any) => { 
      expect(user).toBeTruthy();
      expect(user.name).toBe('Ahmed Shobier');
    });
    const mockReq = testingController.expectOne('api/users/4');
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(USERS[3]);
  });

  afterEach(() => {
    testingController.verify();
  });
});
