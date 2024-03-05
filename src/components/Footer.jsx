import React from 'react'
import GithubImage from"../images/Github_black.png";
import MailImage from"../images/Mail_black.png";
import LinkedINImage from"../images/LinkedIN_black.png";
import DiscordImage from"../images/Discord_black.png";

 

const Footer = () => {
  return (
    <div class="container mx-auto ">
<div class="w-full px-4">
<div class="max-w-xl mx-auto text-center">
<h1 class="font-bold text-base bg-clip-text bg-white text-black font-primary">For More Information</h1>
</div>
<div class="flex items-center justify-between my-6">
<img src={GithubImage} alt=""></img>
<img src={MailImage} alt=""></img>
<img src={LinkedINImage} alt=""></img>
<img src={DiscordImage} alt=""></img>
</div>
</div>
</div>
  )
}

export default Footer