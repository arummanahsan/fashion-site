
import './App.css'
import Container from './Components/Container'
import Flex from './Components/Flex'
import Image from './Components/Image'
import Logo from '../src/assets/Logo.png'
import Menu from './Components/Menu'
import Button from './Components/Button'
import Heading from './Components/Heading'
import Subtitle from './Components/Subtitle'
import Bullets from '../src/assets/Bullets.png'
import Model from '../src/assets/Model.png'


function App() {

  return (
    <>

    {/* Header Section Start */}

    <div className="bg-bgcolor py-8">
      <Container>
        <Flex>
          <div className='w-[15%] pt-2'>
            <Image imgSrc={Logo}/>
          </div>
          <div className='w-[70%] pt-3'>
            <Flex className={"justify-center gap-x-10"}>
              <Menu menuName={'Men'} className={'font-pop font-semibold text-2xl'}/>
              <Menu menuName={'Women'} className={'font-pop font-semibold text-2xl'}/>
              <Menu menuName={'Kids'} className={'font-pop font-semibold text-2xl'}/>
              <Menu menuName={'Collection'} className={'font-pop font-semibold text-2xl'}/>
              <Menu menuName={'Trends'} className={'font-pop font-semibold text-2xl'}/>
            </Flex>
          </div>
          <div className='w-[25%]'>
            <div className='flex justify-end gap-x-3'>
              <Button btnText={'Login'} className={'font-pop px-[28px] py-[10px] rounded-lg shadow-md shadow-[#3d3d3d34]'}/>
              <Button btnText={'Sign Up'} className={'bg-btncolor px-[14px] py-[10px] rounded-lg shadow-md shadow-[#61616115]'}/>
            </div>
          </div>
        </Flex>
      </Container>
    </div>

    {/* Header Section End */}

    {/* Main Section Start */}

    <div className='bg-[#FAE3B6] h-[100%] py-[100px]'>
      <Container>
        <Flex className={'justify-between'}>
          <div className='w-[500px]'>
            <Heading headLine={'Find The Best Fashion Style For You'} className={'font-pop font-semibold text-5xl leading-normal text-[64px]'}></Heading>
            <Subtitle subTitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra.'} className={'w-[500px] pt-3 pb-[50px] font-pop text-[22px]'}></Subtitle>
            <Button btnText={'SHOP NOW'} className={'w-[319px] h-[86px] bg-black font-pop text-white rounded-[10px] mt-5 mb-10'}/>
          </div>
          <div className='flex'>
            <Image imgSrc={Bullets} className={'w-auto h-[264px] translate-y-[168%] translate-x-[35%]'}/>
            <Image imgSrc={Model} className={'w-auto h-[674px] z-10'}/>
          </div>
        </Flex>
      </Container>
    </div>

    {/* Main Section End */}

    </>
  )
}

export default App
