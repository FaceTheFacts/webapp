// Server component
import Image from 'next/image';
import { fetchPolitician } from '../../../domain/politician';
import ProfileImage from '@/app/components/ProfileImage';
import PartyTag from '@/app/components/PartyTag';
import twitter_icon from "../../../public/assets/twitter_icon.png"
import aw_logo_2017_icon from "../../../public/assets/aw_logo_2017_icon.png"
import wordpress_icon from "../../../public/assets/wordpress_icon.png"
import	facebook_icon from "../../../public/assets/facebook_icon.png"
import instagram_icon from "../../../public/assets/instagram_icon.png"
import web_icon from "../../../public/assets/web_icon.png"

export default async function PoliticianPage({ params } : { params: { id: number } }) {
	const  id  = params.id
	const politician : Politician = await fetchPolitician(id);

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
			<div className='flex flex-row justify-end content-center pt-6'>
				<a target="_blank" rel="" href="" className='pr-5'> 
					<Image src={aw_logo_2017_icon} alt="Aw icon" width={20} height={20}/>
				</a>
				<a target="_blank" rel="" href="" className='pr-5'> 
					<Image src={wordpress_icon} alt="Wordpress icon" width={20} height={20}/>
				</a>
				<a target="_blank" rel="" href="" className='pr-5'> 
					<Image src={twitter_icon} alt="Twitter icon" width={20} height={20}/>
				</a>
				<a target="_blank" rel="" href="" className='pr-5'> 
					<Image src={facebook_icon} alt="Twitter icon" width={20} height={20}/>
				</a>
				<a target="_blank" rel="" href="" className='pr-5'> 
					<Image src={instagram_icon} alt="Twitter icon" width={20} height={20}/>
				</a>
				<a target="_blank" rel="" href=""> 
					<Image src={web_icon} alt="Twitter icon" width={20} height={20}/>
				</a>
			</div>
		</div>
    </div>
  );
}