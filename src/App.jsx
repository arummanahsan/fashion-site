
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
import card_one from '../src/assets/card 1.png'
import card_two from '../src/assets/card 2.png'
import card_three from '../src/assets/card 3.png'
import model_two from './assets/Model 2.png'
import bullet_two from './assets/Bullet 2.png'
import bullet_three from './assets/Bullet 3.png'
import product_one from './assets/product 1.png'
import product_two from './assets/product 2.png'
import { FaStar } from "react-icons/fa";



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
              <Button btnText={'Login'} className={'font-pop px-[28px] py-[10px] rounded-lg shadow-md shadow-[#3d3d3d34] transition ease-in duration-500 hover:bg-btncolor'}/>
              <Button btnText={'Sign Up'} className={'bg-btncolor px-[14px] py-[10px] rounded-lg shadow-md shadow-[#61616115] transition ease-in duration-500 hover:bg-black hover:text-white'}/>
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
            <Button btnText={'SHOP NOW'} className={'w-[319px] h-[86px] bg-black font-pop text-white rounded-[10px] mt-5 mb-10 transition ease-in duration-300 hover:bg-btncolor hover:text-black'}/>
          </div>
          <div className='flex'>
            <Image imgSrc={Bullets} className={'w-auto h-[264px] translate-y-[168%] translate-x-[35%]'}/>
            <Image imgSrc={Model} className={'w-auto h-[674px] z-10'}/>
          </div>
        </Flex>
      </Container>
    </div>
    {/* Main Section End */}

    {/* Collection Section Start */}
    <div className="h-[100%] py-[100px] text-center">
        <Container>
          <Heading headLine={"New Collection"} className={"font-frank font-bold text-[64px] mb-16"}/>
          <Flex className={"justify-center"}>
            <div className="w-1/3 mx-10 relative">
              <Image imgSrc={card_one} imgAlt={"Image"} className={"w-full h-[402px]"} />
              <Button btnText={"Sweater"} className={"py-3 px-12 text-black bg-white absolute bottom-10 left-5 right-5 font-pop text-2xl rounded-lg transition ease-in duration-300 hover:bg-btncolor"} />
            </div>
            <div className="w-1/3 mx-10 relative">
              <Image imgSrc={card_two} imgAlt={"Image"} className={"w-full h-[402px]"} />
              <Button btnText={"Jeans"} className={"py-3 px-12 text-black bg-white absolute bottom-10 left-5 right-5 font-pop text-2xl rounded-lg transition ease-in duration-300 hover:bg-btncolor"} />
            </div>
            <div className="w-1/3 mx-10 relative">
              <Image imgSrc={card_three} imgAlt={"Image"} className={"w-full h-[402px]"} />
              <Button btnText={"Baskets"} className={"py-3 px-12 text-black bg-white absolute bottom-10 left-5 right-5 font-pop text-2xl rounded-lg transition ease-in duration-300 hover:bg-btncolor"} />
            </div>

          </Flex>
        </Container>
      </div>
    {/* Collection Section End */}

    {/* Fashion Section Start */}
    <div className="h-[100%] py-[100px]">
        <Container>
          <Flex className={"justify-center"}>
            <div className="w-1/2 relative">
              <Image imgSrc={model_two} imgAlt={"Image"} className={"w-full"} />
              <Image imgSrc={bullet_two} imgAlt={"Image"} className={" absolute -top-28 -right-24 -z-10"} />
              <Image imgSrc={bullet_three} imgAlt={"Image"} className={" absolute -bottom-28 left-[200px] -z-10"} />
            </div>
            <div className="w-1/2 mt-16">
              <Heading headLine={"Best Fashion Since 2010"} className={"font-frank font-bold text-[64px] w-8/12 ml-40"}/>
              <Subtitle subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra."} className={"font-pop font-semibold text-2xl w-8/12 mt-7 ml-40 leading-10"}/>

              <div className="w-[795px] bg-bgcolor py-16 mt-[120px] relative -left-20 rounded-xl -z-10">
                <Flex className={"text-center"}>
                  <div className="w-1/3 pl-8 border-r-2 border-black">
                    <Heading headLine={"2010"} className={"font-pod font-bold text-[64px]"}/>
                    <Subtitle subTitle={"Founded"} className={"font-pop font-medium text-[28px]"}/>
                  </div>
                  <div className="w-1/3 border-r-2 border-black px-10">
                    <Heading headLine={"5000+"} className={"font-pod font-bold text-[64px]"}/>
                    <Subtitle subTitle={"Product Sold"} className={"font-pop font-medium text-[28px]"}/>
                  </div>
                  <div className="w-1/3 px-10">
                    <Heading headLine={"4500+"} className={"font-pod font-bold text-[64px]"}/>
                    <Subtitle subTitle={"Best Reviews"} className={"font-pop font-medium text-[28px]"}/>
                  </div>
                </Flex>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Fashion Section End */}

      {/* Shop Section Start */}.
      <div className="py-28 bg-[#CFA485] relative">
        <Container>
          <Flex className={"justify-center"}>
            <div className="w-1/3">
              <Heading headLine={"Best Seller Product"} className={"font-frank font-bold text-[64px] leading-tight text-white"}/>
              <Subtitle subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus."} className={"font-frank font-bold text-2xl mt-8 text-white"}/>
              <Button btnText={"learn more"} className={"py-5 px-16 mt-20 text-white bg-black rounded-lg transition ease-in duration-300 hover:bg-btncolor hover:text-black"} />
            </div>
            <div className="w-1/3 mx-3">
              <Image imgSrc={product_one} imgAlt={"Image"} className={"w-full"} />
              <div className="bg-white px-4 py-3">
                <Flex>
                  <FaStar className={"text-btncolor pr-2 text-3xl"}/>
                  <FaStar className={"text-btncolor pr-2 text-3xl"}/>
                  <FaStar className={"text-btncolor pr-2 text-3xl"}/>
                  <FaStar className={"text-btncolor pr-2 text-3xl"}/>
                  <FaStar className={"text-btncolor pr-2 text-3xl"}/>
                </Flex>
                <Heading headLine={"Sweater Shirt"} className={"font-pop font-semibold text-[22px] py-1"}/>
                <Flex>
                  <Subtitle subTitle={"$45.99"} className={"font-pop font-regular text-2xl text-gray-300"}  />
                  <Subtitle subTitle={"$35.99"} className={"font-pop font-regular text-2xl ml-10"}  />
                </Flex>
              </div>
            </div>
            <div className="w-1/3 mx-3">
              <Image imgSrc={product_two} imgAlt={"Image"} className={"w-full"} />
              <div className="bg-white px-4 py-3">
                <Flex>
                  <FaStar className={"text-btncolor pr-2 text-3xl"}/>
                  <FaStar className={"text-btncolor pr-2 text-3xl"}/>
                  <FaStar className={"text-btncolor pr-2 text-3xl"}/>
                  <FaStar className={"text-btncolor pr-2 text-3xl"}/>
                  <FaStar className={"text-btncolor pr-2 text-3xl"}/>
                </Flex>
                <Heading headLine={"Pants fashion"} className={"font-pop font-semibold text-[22px] py-1"}/>
                <Flex>
                  <Subtitle subTitle={"$55"} className={"font-pop font-regular text-2xl text-gray-300"}/>
                  <Subtitle subTitle={"$44.99"} className={"font-pop font-regular text-2xl ml-10"}/>
                </Flex>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Shop Section End */}

    </>
  )
}

export default App
