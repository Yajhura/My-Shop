export interface Product {
	description: string;
	images: string[];
	inStock: number;
	price: number;
	sizes: ValidSize[];
	slug: string;
	tags: string[];
	title: string;
	type: ValidTypes;
	gender: 'men' | 'women' | 'kid' | 'unisex';
}

export type ValidSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
export type ValidTypes = 'shirts' | 'pants' | 'hoodies' | 'hats';
