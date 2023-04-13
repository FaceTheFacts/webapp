'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { fetchPolitician } from '../../../domain/politician';
import ProfileImage from '@/app/components/ProfileImage';
import PartyTag from '@/app/components/PartyTag';

import twitterIcon from "../../../public/assets/twitter_icon.png"
import awIcon from "../../../public/assets/aw_logo_2017_icon.png"
import wordpressIcon from "../../../public/assets/wordpress_icon.png"
import	facebookIcon from "../../../public/assets/facebook_icon.png"
import instagramIcon from "../../../public/assets/instagram_icon.png"
import webIcon from "../../../public/assets/web_icon.png"

export default function PoliticianPage({ params: { id } }: { params: { id: number } }) {
	const [politician, setPolitician] = useState<Politician | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
  
	useEffect(() => {
		async function fetchPoliticianData() {
			try {
			const politicianData: Politician = await fetchPolitician(id);
			setPolitician(politicianData);
			} catch (error) {
			console.log(error);
			} finally {
				setIsLoading(false);
			}
		}
  
		fetchPoliticianData();
	}, [id]);

	const socialMediaIcons = [
		{ icon: awIcon, alt: 'Abgeordnetenwatch Link', url: '' },
		{ icon: wordpressIcon, alt: 'Wikipedia Link', url: '' },
		{ icon: twitterIcon, alt: 'Twitter Link', url: '' },
		{ icon: facebookIcon, alt: 'Facebook Link', url: '' },
		{ icon: instagramIcon, alt: 'Instagram Link', url: '' },
		{ icon: webIcon, alt: 'Homepage Link', url: '' },
	];
	
	if (isLoading) {
		return <div className='text-white'>Bitte warten. Ergebnisse werden geladen.</div>;
	}

	if (!politician) {
		return null;
	}

	return (
		<>
			<div className="flex flex-row px-22.75">
				<div className="flex flex-row flex-shrink-0 pt-6">
					<div className="pr-10"> 
						<ProfileImage id={id}/>
					</div>
					<ul className="py-5.75 pr-29.5">
						<h1 className='text-xl text-white font-semibold'>
							{politician.label}
						</h1>
						<li className="font-semibold text-[#A2A2A7] pt-2.5">
							{politician.occupations.join(", ")}
							<PartyTag party={politician.party}/>
						</li>
					</ul>
					<div className="flex flex-row justify-end content-center pt-6">
						{socialMediaIcons.map((icon, index) => (
							<a key={index} target="_blank" rel="" href={icon.url} className="pr-5">
								<Image src={icon.icon} alt={icon.alt} height={20}/>
							</a>					
						))}
					</div>
				</div>
			</div>
		</>
	);
}