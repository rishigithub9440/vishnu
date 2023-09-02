export enum InstanceClass {
	man = 'Man',
	woman = 'Woman',
	youngmale = 'youngmale',
	youngfemale = 'youngfemale',
	cat = 'Cat'
}

export interface Theme {
	name: string;
	prompt: string;
	instance_classes: InstanceClass[];
}

export const prompts: Theme[] = [
	{
		name: 'Jedi',
		instance_classes: [],
		prompt:
			'realistic closeup portrait of @me as a jedi , highly detailed, science fiction, star wars concept art, intricate details, bright colors, golden hour, art by marko djurdjevic, greg rutkowski, wlop, fredperry, digital painting, rossdraws.'
	},
	{
		name: 'viking',
		instance_classes: [InstanceClass.man, InstanceClass.woman, InstanceClass.couple],
		prompt:
			'closeup portrait painting of @me as a viking, ultra realistic, concept art, intricate details, powerful and fierce, highly detailed, photorealistic, octane render, 8 k, unreal engine. art by artgerm and greg rutkowski and charlie bowater and magali villeneuve and alphonse mucha, golden hour, horns and braids in hair, fur-lined cape and helmet, axe in hand, looking towards the camera.'
	},
	{
		name: 'paladin',
		instance_classes: [InstanceClass.man, InstanceClass.woman, InstanceClass.couple],
		prompt:
			'closeup portrait of @me as a paladin, wearing brilliant white armor and a crown, fantasy concept art, artstation trending, highly detailed, beautiful landscape in the background, art by wlop, greg rutkowski, thierry doizon, charlie bowater, alphonse mucha, golden hour lighting, ultra realistic.'
	},
	{
		name: 'hobbit',
		instance_classes: [InstanceClass.man],
		prompt:
			'Closeup portrait of @me as a Hobbit, small, big brown eyes, green and brown clothing, detailed facial features, small feet, wispy hair, fantasy concept art, artstation trending, highly detailed, art by John Howe, Alan Lee, and Weta Workshop, earthy colors, looking into camera.'
	},
	{
		name: 'harry potter',
		instance_classes: [InstanceClass.man],
		prompt:
			'closeup portrait of @me as a Harry Potter character, magical world, wands, robes, Hogwarts castle in the background, enchanted forest, detailed lighting, art by jim kay, charlie bowater, alphonse mucha, ronald brenzell, digital painting, concept art.'
	},
	{
		name: 'elf',
		instance_classes: [InstanceClass.man, InstanceClass.woman, InstanceClass.couple],
		prompt:
			'Closeup portrait of @me as an elf with long blond hair, fantasy concept art, intricate details, detailed armor, majestic background, art by wlop, Greg Rutkowski, digital painting, smooth lighting, looking towards the viewer.'
	},
	{
		name: 'soccer',
		instance_classes: [InstanceClass.man],
		prompt:
			'closeup portrait of @me as a soccer player @me wearing a xred and white uniform, action shot, grassy field in the background, bright sunlight, motion blur, dramatic lighting, intense facial expression, art by ross tran, charlie bowater, ignacio fernandez rios, kai carpenter, leesha hannigan, thierry doizon.'
	},
	{
		name: 'clown',
		instance_classes: [InstanceClass.man, InstanceClass.woman, InstanceClass.couple],
		prompt:
			'Closeup portrait of @me as a clown, highly detailed, surreal, expressionless face, bright colors, contrast lighting, abstract background, art by wlop, greg rutkowski, charlie bowater, magali villeneuve, alphonse mucha, cartoonish, comic book style.'
	},
	{
		name: 'wizard',
		instance_classes: [InstanceClass.man, InstanceClass.woman, InstanceClass.couple],
		prompt:
			'closeup portrait of @me as a wizard, highly detailed @me, fantasy concept art, intricate details and textures, magical, colorful, art by wlop, greg rutkowski, charlie bowater, magali villeneuve, alphonse mucha, surreal, @me looking into the distance, holding a staff, fire and stars in the background.'
	},
	{
		name: 'cyberpunk',
		instance_classes: [InstanceClass.man, InstanceClass.woman, InstanceClass.couple],
		prompt:
			'closeup portrait of @me as a cyberpunk, dark and gritty, highly detailed, retro-futuristic style, neon lighting, cyberpunk city in the background, art by wlop, greg rutkowski, and charlie bowater, 8 k resolution, ultra-realistic, octane render, unreal engine.'
	},
	{
		name: 'astronaut',
		instance_classes: [InstanceClass.man, InstanceClass.woman, InstanceClass.couple],
		prompt:
			'closeup portrait of @me as an astronaut, futuristic, highly detailed, ultra realistic, concept art, intricate textures, interstellar background, space travel, art by alphonse mucha, ryan kittleson, greg rutkowski, leesha hannigan, stephan martiniere, stanley artgerm lau.'
	},
	{
		name: 'samurai',
		instance_classes: [InstanceClass.man, InstanceClass.woman, InstanceClass.couple],
		prompt:
			'closeup portrait of @me as a samurai warrior, war-torn landscape in the background, wearing a black and red armor, ready to fight, detailed textures, concept art, noir art, art by hinata matsumura, alphonse mucha, mike mignola, kazu kibuishi, and rev.matsuoka, digital painting, ultra-realistic.'
	},
	{
		name: 'ninja',
		instance_classes: [InstanceClass.man, InstanceClass.woman, InstanceClass.couple],
		prompt:
			'closeup portrait of @me as a ninja, wearing a black hood and suit, stealthy movements, dark night background, shadows and mist, detailed and realistic, art by kazuya yamashita, yuya kanzaki, yang zhizhuo, digital painting, photorealism, 8k resolution.'
	},
	{
		name: 'pirate',
		instance_classes: [InstanceClass.man, InstanceClass.woman, InstanceClass.couple],
		prompt:
			'closeup portrait of @me as a pirate, wild and crazy, bandana, eye patch, golden hoop earrings, tattered and ripped clothes, detailed tattoos, rough and rugged, art by alphonse mucha, kai carpenter, ignacio fernandez rios, charlie bowater, noir photorealism, ultra real.'
	},
	{
		name: 'superhero',
		instance_classes: [InstanceClass.man, InstanceClass.woman, InstanceClass.couple],
		prompt:
			'closeup portrait of @me as a superhero, dynamic lighting, intense colors, detailed costume, artstation trending, art by alphonse mucha, greg rutkowski, ross tran, leesha hannigan, ignacio fernandez rios, kai carpenter, noir photorealism, film'
	},
	{
		name: 'knight',
		instance_classes: [InstanceClass.man, InstanceClass.woman, InstanceClass.couple],
		prompt:
			'closeup portrait of @me as a knight wearing a full suit of armor, intricate details, majestic and powerful, bright shining silver armor, matching blue cape, a golden crown, artstation trending, highly detailed, digital painting, art by wlop, greg rutkowski, and charlie bowater.'
	},
	{
		name: 'cyborg',
		instance_classes: [InstanceClass.man, InstanceClass.woman, InstanceClass.couple],
		prompt:
			'closeup portrait of @me as a cyborg, mechanical parts, ultra realistic, concept art, intricate details, eerie, highly detailed, photorealistic, 8k, unreal engine. art by artgerm and greg rutkowski and charlie bowater and magali villeneuve and alphonse mucha, golden hour, cyberpunk, robotic, steampunk, neon colors, metallic textures.'
	},
	{
		name: 'monster',
		instance_classes: [InstanceClass.man, InstanceClass.woman, InstanceClass.couple],
		prompt:
			'closeup portrait of @me as monster with glowing eyes and sharp teeth, dark shadows, foggy background, highly detailed, photorealism, concept art, digital painting, art by yahoo kim, max grecke, james white, viktor hulík, fabrizio bortolussi.'
	},
	{
		name: 'vampire',
		instance_classes: [InstanceClass.man, InstanceClass.woman, InstanceClass.couple],
		prompt:
			'closeup portrait of @me as a vampire, pale skin, dark eyes, sharp fangs, detailed shadows and highlights, eerie atmosphere, mystical and magical, art by leesha hannigan, thierry doizon, alphonse mucha, kai carpenter, noir photorealism, surreal and dreamlike, deep red hues.'
	},
	{
		name: 'zombie',
		instance_classes: [InstanceClass.man, InstanceClass.woman, InstanceClass.couple],
		prompt:
			'closeup portrait of @me as a zombie, decaying skin and clothing, dark and eerie, highly detailed, photorealistic, 8k, ultra realistic, horror style, art by greg rutkowski, charlie bowater, and magali villeneuve.'
	},
	{
		name: 'witch',
		instance_classes: [InstanceClass.woman],
		prompt:
			'closeup portrait of @me as a witch surrounded by magical elements, highly detailed, photorealism, digital painting, dark colors, grayscale, intricate details, art by yuumei, greg rutkowski, eddie hong, and charlie bowater, ultra realism, magical elements.'
	},
	{
		name: 'black and white',
		instance_classes: [InstanceClass.man, InstanceClass.woman, InstanceClass.couple],
		prompt:
			'@me in the style of kentaro miura, 4 k, 8 k, absolute detail of even the smallest details and particles, beautiful shadows, beautiful art, black and white drawing, high rendering of the details of the environment, faces and characters'
	},
	{
		name: 'pixar character',
		instance_classes: [InstanceClass.man, InstanceClass.woman, InstanceClass.couple],
		prompt:
			'@me as a character from pixar, au naturel, PS2, PS1, hyper detailed, digital art, trending in artstation, cinematic lighting, studio quality, smooth render, unreal engine 5 rendered, octane rendered, art style by klimt and nixeu and ian sprigger and wlop and krenz cushart.'
	}
	
];

export const getThemes = (instanceClass: string | null) =>
	prompts.filter((item) => !item.instance_classes.includes(instanceClass as InstanceClass));

export const getTheme = (theme: string) => prompts.find((item) => item.name == theme);

export const getPrompt = (name: string) => prompts.find((prompt) => prompt.name == name)?.prompt;
