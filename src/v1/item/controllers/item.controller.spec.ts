import { Test, TestingModule } from '@nestjs/testing';
import { ItemController } from '@src/v1/item/controllers/item.controller';

describe('ItemController', () => {
	let controller: ItemController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [ItemController],
		}).compile();

		controller = module.get<ItemController>(ItemController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
