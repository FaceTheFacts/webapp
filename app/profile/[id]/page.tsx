// Server component
import Image from 'next/image';
import { fetchPolitician } from '../../../domain/politician';
import ProfileImage from '@/app/components/ProfileImage';
import PartyTag from '@/app/components/PartyTag';

import twitterIcon from "../../../public/assets/twitter_icon.png"
import awIcon from "../../../public/assets/aw_logo_2017_icon.png"
import wordpressIcon from "../../../public/assets/wordpress_icon.png"
import	facebookIcon from "../../../public/assets/facebook_icon.png"
import instagramIcon from "../../../public/assets/instagram_icon.png"
import webIcon from "../../../public/assets/web_icon.png"

export default async function PoliticianPage({ params: { id } } : { params: { id: number } }) {
	const politician : Politician = await fetchPolitician(id);

	const socialMediaIcons = [
		{icon: awIcon, alt: "Icon", url:""},
		{icon: wordpressIcon, alt: "Icon", url:""},
		{icon: twitterIcon, alt: "Icon", url:""},
		{icon: facebookIcon, alt: "Icon", url:""},
		{icon: instagramIcon, alt: "Icon", url:""},
		{icon: webIcon, alt: "Icon", url:""},
	]

	return (
		<div className="flex flex-row px-22.75">
			<div className="flex flex-row pt-6">
				<div className="pr-10"> <ProfileImage id={id}/> </div>
				<ul className="py-5.75 pr-29.5">
					<h1 className='text-xl text-white font-semibold'>{politician.label}</h1>
					<li className="font-semibold text-[#A2A2A7] pt-2.5">
						{politician.occupations.join(", ")}
						<PartyTag party={politician.party}/>
					</li>
				</ul>
				<div className="flex flex-row justify-end content-center pt-6">
					{socialMediaIcons.map((icon, index) => (
						<a key={index} target="_blank" rel="" href={icon.url} className="pr-5">
							<Image src={icon.icon} alt={icon.alt} width={20} height={20}/>
						</a>					
					))}
				</div>
			</div>
		</div>
	);
}