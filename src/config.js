// eslint-disable-next-line no-var
var config = {
	locale: 'en',
	isRTL: false,
	navigation: [
		{ name: 'App info', icon: "ic_smartphone.svg", link: '/' },
		{ name: 'Features', icon: "ic_features.svg", link: '/features' },
		{ name: 'For whom', icon: "business .svg", link: '/for_whom' },
		{ name: 'Pricing', icon: "ic_pricing.svg", link: '/pricing'},
		{ name: 'Reviews', icon: "ic_reviews.svg", link: '/reviews' }
	],
	menu: [
		{ name: 'about_us', link: '/he/about_us' },
		{ name: 'contact_us', link: '/he/contact_us' },
		{ name: 'support', link: '/he/support'},
		{ name: 'faq', link: '/he/faq'},
		{ name: 'terms_of_use', link: '/he/terms_of_use' }
	],
	features: [
		{name: 'business', icon: 'ic_sync.svg'},
		{name: 'subscriptions',	icon: 'ic_phone_message_feature.svg'},
		{name: 'appointments', icon: 'ic_calendar_feature.svg'},
		{name: 'management', icon: 'ic_management.svg'},
		{name: 'notifications', icon: 'ic_phone_message_feature.svg'},
		{name: 'reminders', icon: 'ic_group_feature.svg'},
		{name: 'business', icon: 'ic_sync.svg'},
		{name: 'subscriptions',	icon: 'ic_phone_message_feature.svg'},
		{name: 'appointments', icon: 'ic_calendar_feature.svg'},
		{name: 'management', icon: 'ic_management.svg'},
		{name: 'notifications', icon: 'ic_phone_message_feature.svg'},
		{name: 'reminders', icon: 'ic_group_feature.svg'}
	],
	modules: {
		hero: {
			features: ['business', 'subscriptions', 'appointments' ]
		},
		features: {
			internal_link: {
				name: 'features',
				url: 'features'
			},
			data: [
				{
					name: 'business',
					preview_pic: 'previews-ic_business.jpg',
					icon: 'ic_business.svg'
				},
				{
					name: 'subscriptions',
					preview_pic: 'previews-ic_client_subscriptions.jpg',
					icon: 'ic_client_subscriptions.svg'
				},
				{
					name: 'appointments',
					preview_pic: 'previews-ic_calendar.jpg',
					icon: 'ic_calendar.svg'
				},
				{
					name: 'management',
					preview_pic: 'previews-ic_clients_management.jpg',
					icon: 'ic_clients_management.svg'
				},
				{
					name: 'notifications',
					preview_pic: 'previews-ic_sms_notifications.jpg',
					icon: 'ic_sms_notifications.svg'
				},
				{
					name: 'reminders',
					preview_pic: 'previews-ic_tasks_reminders.jpg',
					icon: 'ic_tasks_reminders.svg'
				}
			]
		},
		showcases: {
			internal_link: {
				name: 'showcases',
				url: 'showcases'
			}
		},
		business_types: {
			internal_link: {
				name: 'business_types',
				url: 'business_types'
			},
			data: [
				{
					name: 'hair_salons',
					icon: 'pic_hair_salons.jpg'
				},
				{
					name: 'nail_and_makeup_artists',
					icon: 'pic_nail_makeup.jpg'
				},
				{
					name: 'cosmetics',
					icon: 'pic_cosmetics.jpg'
				},
				{
					name: 'massage_centers',
					icon: 'pic_massage_centers.jpg'
				}
			]
		},
		feedback: {
			internal_link: {
				name: 'feedback',
				url: 'feedback'
			},
			data: [
				{
					id: 1,
					customer_name: 'Mary Hall',
					rating: 3,
					picture: 'avatar.png',  // picture will render jpg and webp
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
					picture: 'avatar.png',  // picture will render jpg and webp
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
				{ name: 'basic', icon: "ic_basic.svg", price_monthly: null, price_yearly: null },
				{ name: 'premium', icon: "ic_premium.svg", price_monthly: 10, price_yearly: 100 },
				{ name: 'ultimate', icon: "ic_ultimate.svg", price_monthly: 19, price_yearly: 190 },
				{ name: 'basic', icon: "ic_basic.svg", price_monthly: null, price_yearly: null },
				{ name: 'premium', icon: "ic_premium.svg", price_monthly: 10, price_yearly: 100 },
				{ name: 'ultimate', icon: "ic_ultimate.svg", price_monthly: 19, price_yearly: 190 }
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
		login: '/login',
		signup: '/signup',
		old_website: '/text_website.html',
		static: './assets/media/',
		static_clients: './assets/clients/',
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
		home_page: {
			title: 'Calendar App for Business',
			button_text: 'Try for Free!'
		},
		head: {
			title: 'title',
			description: 'description',
			keywords: 'keywords'
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
			main_title: 'Customer Reviews',
			subtitle: 'They chose Atzmaim for their business',
			leave_btn_label: 'Leave Feedback'
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
			copy_right: '{year} Atzmaim | All right reserved',
			old_website: 'old_website',
			social_networks: {
				facebook: 'https://atzma.im/facebook',
				twitter: 'https://atzma.im/twitter',
				instagram: 'https://atzma.im/instagram'
			}
		}
	}
};
