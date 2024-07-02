import React from 'react'

 function LeftPart() {
  return (
    <div>
        <div>
        <div className="right pl-[10px] pr-[10px] pt-[5px] w-[35%] text-[#fff] ">
            <div className="search w-full ">
                <input  type="Search" placeholder='Search'/>
                </div>
                <div className="subscribe pb-[10px]">
                    <h4> Subscribe to Premium</h4>
                    <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
                    <button>Subscribe</button>
              
            </div>
            {/* end Subscribe */}
            <div className="happening">
                <h3 className='bold pt-[10px]'>What’s happening</h3>
                <div className="happening-nav">
                    <div className="img-happ flex align-items mb-[20px] mt-[20px]">
                        <img className='w-[20%] h-[30%] rounded-[6px] mr-[20px]' src="https://pbs.twimg.com/semantic_core_img/1806378440674648064/l9zUJWoI?format=jpg&name=240x240" alt="" />
                        <div>
                        <p className='text-[14px] bold '>UEFA European Championship LIVE</p>
                        <p className='text-[14px] text-[#5e6266]'>Copa America - Last night</p>
                        </div>
                        
                    </div>
                    <div className='flex justify-between align-items text-[#5e6266]'>
                        <div>
                        <p className='text-[14px]'>Politics · Trending</p>
                        <p lassName='text-[14px]'>1,105 posts</p>
                        </div>
                      
                        <div className='tag mb-[20px]'>
                        <p><i class="fas fa-ellipsis-h center ml-[20px] text-[14px] text-[#fff]"></i></p>
                        <p className='mr-[10px] text-[#fff]'>#Aramco</p>
                        </div>
                    </div>
                    <div className='flex justify-between text-[#5e6266]'>
                        <div>
                        <p className='text-[14px]'>Politics · Trending</p>
                        <p lassName='text-[14px]'>1,105 posts</p>
                        </div>
                      
                        <div className='tag mb-[20px] '>
                        <p><i class="fas fa-ellipsis-h  ml-[20px] text-[#fff]"></i></p>
                        <p className='mr-[10px] text-[#fff]'>#Unified</p>
                        </div>
                    </div>
                    <div className='flex justify-between text-[#5e6266]'>
                        <div>
                        <p className='text-[14px]'>Politics · Trending</p>
                        <p lassName='text-[14px]'>1,105 posts</p>
                        </div>
                      
                        <div className='tag mb-[20px]'>
                        <p><i class="fas fa-ellipsis-h  ml-[20px] text-[#fff]"></i></p>
                        <p className='mr-[10px] text-[#fff]'>#Health</p>
                        </div>
                      
                    </div>
                    <p className='Show-more mt-[20px] mb-[20px] text-[#105584]'>Show more</p>
                    </div>
                    </div>
                    {/* end */}
        </div>
        </div>
    </div>
    // </>
  )
}

export default LeftPart