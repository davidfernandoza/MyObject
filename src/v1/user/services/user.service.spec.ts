import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '@src/v1/user/services/user.service';

describe('UserServices', () => {
	let provider: UserService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [UserService],
		}).compile();

		provider = module.get<UserService>(UserService);
	});

	it('should be defined', () => {
		expect(provider).toBeDefined();
	});
});
