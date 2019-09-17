const lang = 'he'
const config = {
	baseUrl: '',
	locale: lang,
	isRTL: lang === 'he',
	navigation: {
		hero: { icon: 'ic_smartphone.svg', link: '#hero' },
		features: { icon: 'ic_features.svg', link: '#features' },
		business_types: { icon: 'ic_for_whom.svg', link: '#business_types' },
		showcases: { link: '#showcases' },
		pricing: { icon: 'ic_pricing.svg', link: '#pricing'},
		feedback: { icon: 'ic_reviews.svg', link: '#feedback' }
	},
	menu: [
		{ name: 'about_us', link: `/${lang}/about_us` },
		{ name: 'contact_us', link: `/${lang}/contact_us` },
		{ name: 'support', link: `/${lang}/support`},
		{ name: 'faq', link: `/${lang}/faq`},
		{ name: 'terms_of_use', link: `/${lang}/terms_of_use` }
	],
	modules: {
		hero: {
			features: ['business', 'subscriptions', 'appointments']
		},
		features: {
			data: [
				{
					name: 'business',
					preview_pic: 'ic_sync.svg',
					icon: 'pic_iphone.png'
				},
				{
					name: 'subscriptions',
					preview_pic: 'ic_phone_message.svg',
					icon: 'pic_iphone.png'
				},
				{
					name: 'appointments',
					preview_pic: 'ic_calendar.svg',
					icon: 'pic_iphone.png'
				},
				{
					name: 'management',
					preview_pic: 'ic_management.svg',
					icon: 'pic_iphone.png'
				},
				{
					name: 'notifications',
					preview_pic: 'ic_phone_message.svg',
					icon: 'pic_iphone.png'
				},
				{
					name: 'reminders',
					preview_pic: 'ic_group.svg',
					icon: 'pic_iphone.png'
				}
			]
		},
		showcases: {
		},
		business_types: {
			internal_link: {
				name: 'business_types',
				url: 'business_types'
			},
			data: [
				{
					name: 'hair_salons',
					icon: 'pic_mask'
				},
				{
					name: 'nail_and_makeup_artists',
					icon: 'nail_and_makeup_artists'
				},
				{
					name: 'installers_and_technicians',
					icon: 'installers_and_technicians'
				},
				{
					name: 'cosmetics',
					icon: 'cosmetics'
				},
				{
					name: 'massage_centers',
					icon: 'massage_centers'
				}
			]
		},
		feedback: {
			data: [
				{
					id: 1,
					customer_name: 'Mary Hall',
					rating: 3,
					picture: '1.jpg',  // picture will render jpg and webp
					picture_web: '1.webp',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde recusandae laudantium, laborum adipisci perferendis sequi id ex officia voluptate hic asperiores soluta fuga nulla est, excepturi? Harum, repellat, commodi!'
				},
				{
					id: 2,
					customer_name: 'Emilia Clark',
					rating: 5,
					picture: 'avatar.png',  // picture will render jpg and webp
					picture_web: '2.webp',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde recusandae laudantium, laborum adipisci perferendis sequi id ex officia voluptate hic asperiores soluta fuga nulla est, excepturi? Harum, repellat, commodi!'
				},
				{
					id: 3,
					customer_name: 'Scarlett Johansson',
					rating: 5,
					picture: 'avatar.png',  // picture will render jpg and webp
					picture_web: '3.webp',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde recusandae laudantium, laborum adipisci perferendis sequi id ex officia voluptate hic asperiores soluta fuga nulla est, excepturi? Harum, repellat, commodi!'
				},
				{
					id: 4,
					customer_name: 'Mary Hall',
					rating: 5,
					picture: '',  // picture will render jpg and webp
					picture_web: '1.webp',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde recusandae laudantium, laborum adipisci perferendis sequi id ex officia voluptate hic asperiores soluta fuga nulla est, excepturi? Harum, repellat, commodi!'
				},
				{
					id: 5,
					customer_name: 'Mary Hall',
					rating: 5,
					picture: 'avatar.png',  // picture will render jpg and webp
					picture_web: '1.webp',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde recusandae laudantium, laborum adipisci perferendis sequi id ex officia voluptate hic asperiores soluta fuga nulla est, excepturi? Harum, repellat, commodi!'
				},
				{
					id: 6,
					customer_name: 'Mary Hall',
					rating: 5,
					picture: 'avatar.png',  // picture will render jpg and webp
					picture_web: '1.webp',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde recusandae laudantium, laborum adipisci perferendis sequi id ex officia voluptate hic asperiores soluta fuga nulla est, excepturi? Harum, repellat, commodi!'
				},
				{
					id: 7,
					customer_name: 'Mary Hall',
					rating: 5,
					picture: 'avatar.png',  // picture will render jpg and webp
					picture_web: '1.webp',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde recusandae laudantium, laborum adipisci perferendis sequi id ex officia voluptate hic asperiores soluta fuga nulla est, excepturi? Harum, repellat, commodi!'
				}
			]
		},
		pricing: {
			currency: '$',
			data: [
				{ name: 'basic', icon: "basic.svg", price_monthly: null, price_yearly: null },
				{ name: 'premium', icon: "premium.svg", price_monthly: 10, price_yearly: 100 },
				{ name: 'ultimate', icon: "ultimate.svg", price_monthly: 19, price_yearly: 190 },
			]
		},
		footer: {}
	},
	urls: {
		social_networks: [
			{ name: 'twitter', url: 'https://twitter.com', icon: 'ic_twitter.svg' },
			{ name: 'facebook', url: 'https://facebook.com', icon: 'ic_facebook.svg' },
			{ name: 'instagram', url: 'https://instagram.com', icon: 'ic_instagram.svg' }
		],
		support: `/${ lang }/support`,
		login: `/${ lang }/login`,
		signup: `/${ lang }/signup`,
		old_website: '/text_website.html',
		media: './assets/media/',
		media_clients: './assets/clients/',
		default_path_to_avatar: './assets/clients/',
		default_avatar: 'default_avatar.jpg',
		media_business_types: './dist/business_types/'
	},
	translations: {
		menu: {
			about_us: 'About Us',
			contact_us: 'Contact Us',
			support: 'Support',
			faq: 'FAQ',
			terms_of_use: 'Terms of Use'
		},
		hero_page: {
			title: 'Calendar App for Business',
			button_text: 'Try for Free!'
		},
		error_page: {
			title: 'Oops!',
			text: 'Something went wrong, but we\'re going to fix it! Sorry about that',
			home_btn: 'Back to Homepage',
			support_btn: 'Contact Support',
			join_btn: 'Join Atzmaim Now'
		},
		head: {
			title: 'title',
			description: 'description',
			keywords: 'keywords'
		},
		navigation: {
			hero: { name: 'App info' },
			features: { name: 'Features' },
			showcases: {name: 'Showcases'},
			business_types: { name: 'For whom' },
			pricing: { name: 'Pricing' },
			feedback: { name: 'Feedback' }
		},
		hero: {
			internal_link_name: 'HERO',
			main_logo: 'ATZMAIM',
			main_logo_label: 'ATZMAIM Logo',
			main_title: 'Manage Business Easily',
			log_in: 'Log in',
			sign_up: 'Sign Up',
			description: 'We’ve created for you an application with calendar,clients appointments, automated text reminders andother useful tools for managing your business easy',
			join_us: 'Join Now for Free',
			calendar_icon: 'Calendar picture'
		},
		features: {
			back_to_features: 'Discover all',
			internal_link_name: 'WHY',
			content: {
				title: 'Powerful Features & Simple to Use',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
				data: {
					business: { name: 'Business Management', description: 'Voluptate autem unde voluptatum. Enim voluptatem voluptas.' },
					appointments: { name: 'Appointments Calendar', description: 'Et voluptate sapiente. Ratione ror praesentium.' },
					notifications: { name: 'SMS Notifications', description: 'Delectus fugiat voluptatem explicabo atque harum. Quis quae alias consequuntur.' },
					subscriptions: { name: 'Client’s Subscriptions', description: 'Est perspiciatis veniam. Rerum aspernatur debitis ut deserunt quam aperiam.' },
					management: { name: 'Client’s Management', description: 'Voluptate inventore quia necessitatibus. Vitae et quae quae. Doloribus tenetur sunt et ut.' },
					reminders: { name: 'Tasks and Reminders', description: 'Sint qui et nihil praesentium adipisci tempore. Exercitationem in ut.' }
				}
			}
		},
		showcases: {
			internal_link_name: 'SHOWCASES',
			main_title: 'App that makes business easy',
			learn_more: 'Learn More',
			description1: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua',
			description2: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua',
			icon_alt_text: 'Iphone icon'
		},
		business_types: {
			internal_link_name: 'BUSINESS TYPES',
			main_title: 'Types of Business',
			subtitle: 'Atzmaim App for any type of business',
			preview_text: 'Tap on image for more info',
			content: {   // * 6 items
				hair_salons: {
					title: 'Hair Stylists and Salons',
					text: 'Hair Salons Text Hair Salons Text',
					alt: 'Hair Salons Alt'
				},
				nail_and_makeup_artists: {
					title: 'nail and makeup artists Title',
					text: 'nail and makeup artists Text nail and makeup artists Text',
					alt: 'nail and makeup artists Alt'
				},
				installers_and_technicians: {
					title: 'installers and technicians',
					text: 'installers and technicians',
					alt: 'nail and makeup artists Alt'
				},
				massage_centers: {
					title: 'Massage Centers',
					text: 'Installers and technicians Text Installers and technicians Text',
					alt: 'Massage Centers'
				},
				cosmetics: {
					title: 'Cosmetics and Beauty Therapists',
					text: 'Installers and technicians Text Installers and technicians Text',
					alt: 'Massage Centers'
				}
			}
		},
		feedback: {
			internal_link_name: 'FEEDBACK',
			alt_pic: 'User avatar',
			main_title: 'Customer Feedback',
			subtitle: 'They chose Atzmaim for their business',
			leave_btn_label: 'Leave Feedback',
			upload_photo: 'Upload your photo',
			name_label: 'Full name',
			text_label: 'Write a review',
			cancel_label: 'Cancel',
			submit_label: 'Submit',
			uploaded_photo: 'The photo is uploaded'
		},
		pricing: {
			title: "Plans for Everyone and Any Business",
			subtitle: "Choose the plan and tap to learn more",
			data: {
				basic: {
					small_preview: {
						name: 'Basic',
						group_preview_price: 'Free',
						period: ''
					},
					opened_preview: {
						name: 'Basic',
						business_type: 'Small businesses',
						group_preview_price: 'Free',
						period: '/forever',
						price_monthly: null,
						price_yearly: null,
						features: ["100 Appointments monthly", "Available on 1 Device", "Text message reminders", "Client management", "Sync with Google Calendar", ],
						cta_label: 'Try for free' // call-to-action, "join us" text
					}
				},
				premium: {
					small_preview: {
						name: 'Premium',
						group_preview_price: '{currency}{price_value}',
						period: '/month'
					},
					opened_preview: {
						name: 'Premium',
						business_type: 'Decent businesses',
						group_preview_price: '{currency}{price_value}',
						period: '/month',
						price_monthly: 'Bill monthly',
						price_yearly: 'Bill yearly',
						features: ["Unlimited Appointments", "Available on 2 Devices", "Text message reminders", "Client management", "Sync with Google Calendar", "Sync across devices", "Group appoinments", "Recurring appointments", "Messages without our branding", "Priority support", ],
						cta_label: 'Subscribe now' // call-to-action, "join us" text
					}
				},
				ultimate: {
					small_preview: {
						name: 'Ultimate',
						group_preview_price: '{currency}{price_value}',
						period: '/month'
					},
					opened_preview: {
						name: 'Ultimate',
						business_type: 'Well based businesses',
						group_preview_price: '{currency}{price_value}',
						period: '/month',
						price_monthly: 'Bill monthly',
						price_yearly: 'Bill yearly',
						features: ["Unlimited Appointments", "Unlimited Devices", "Text message reminders", "Client management", "Sync with Google Calendar", "Sync across devices", "Group appoinments", "Recurring appointments", "Messages without our branding", "Priority support", ],
						cta_label: 'Subscribe now' // call-to-action, "join us" text
					}
				}
			}
		},
		footer: {
			copy_right: new Date().getFullYear() + ' Atzmaim | All right reserved',
			old_website: 'old_website',
			social_networks: {
				facebook: 'https://atzma.im/facebook',
				twitter: 'https://atzma.im/twitter',
				instagram: 'https://atzma.im/instagram'
			}
		}
	}
};
