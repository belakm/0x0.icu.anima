import { useRouter } from 'next/dist/client/router'
import Window from '../system/Window/Window'
import CmsNft from './CmsNft'
import CmsPortfolio from './CmsPortfolio'

const Cms = () => {
  const {
    query: { type },
  } = useRouter()
  return type == 'portfolio' ? (
    <CmsPortfolio />
  ) : type == 'nft' ? (
    <CmsNft />
  ) : (
    <Window title="nah.exe">Check your url, the route is wrong.</Window>
  )
}

export default Cms
