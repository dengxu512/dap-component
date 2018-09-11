import { NgTreeModule } from './ng-tree.module';

describe('NgTreeModule', () => {
  let ngTreeModule: NgTreeModule;

  beforeEach(() => {
    ngTreeModule = new NgTreeModule();
  });

  it('should create an instance', () => {
    expect(ngTreeModule).toBeTruthy();
  });
});
