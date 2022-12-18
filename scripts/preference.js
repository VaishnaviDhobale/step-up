let btnlist = document.querySelectorAll("#btnlist li");
let secondS = document.getElementById("secondS");
start();
function start()
{
    secondS.innerHTML=`
    <div id="profile">
                    <div id="p1">
                        <h3>Profile Settings</h3>
                        <button>Save</button>
                    </div>
                    <label>Upload Profile </label>
                    <div id="p2">
                        <div>
                            <img width="100px" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="pic">
                        </div>
                        <p>Only JPG, PNG and JPEG files are supported.</p>
                    </div>
                    <div id="p3">
                        <div>
                            <label>Name</label>
                            <div>
                                <input type="text" placeholder="Name">
                            </div>
                        </div>
                        <div>
                            <label >Email</label>
                            <div >
                                <input type="text" id="emailId" placeholder="yourEmailid@gmail.com" readonly>
                            </div>
                        </div>
                        <div>
                            <label>Password</label>
                            <div>
                                <input type="password" placeholder="Password">
                            </div>
                        </div>
                        <div>
                            <label>Role</label>
                            <div>
                                <select name="" id="">
                                    <option>Set an Option</option>
                                    <option>IT Manager</option>
                                    <option>Sales Manager</option>
                                    <option>Developer</option>
                                    <option>Operations Manager</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <div>
                                <input type="number" placeholder="Phone Number">
                            </div>
                        </div>
                        <div>
                            <label>Curruancy</label>
                            <div>
                                <select name="" id="">
                                    <option>Set an Option</option>
                                    <option>United States Dollar</option>
                                    <option>Inidan Rupee</option>
                                    <option>Indonesian Rupiah</option>
                                    <option>Jamaican Dollar</option>
                                    <option>Euro</option>
                                    <option>Pakistani Rupee</option>
                                    <option>Saudi Riyal</option>
                                    <option>Nepalese Rupee</option>
                                </select>
                            </div>
                        </div>
                       
                    </div>
                </div>
    `
}
btnlist[0].addEventListener("click", function () {
    
    secondS.innerHTML=`
    <div id="profile">
                    <div id="p1">
                        <h3>Profile Settings</h3>
                        <button>Save</button>
                    </div>
                    <label>Upload Profile</label>
                    <div id="p2">
                        <div>
                            <img width="100px" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="pic">
                        </div>
                        <p>Only JPG, PNG and JPEG files are supported.</p>
                    </div>
                    <div id="p3">
                        <div>
                            <label>Name</label>
                            <div>
                                <input type="text" placeholder="Name">
                            </div>
                        </div>
                        <div>
                            <label>Email</label>
                            <div>
                                <input id="emailId" placeholder="yourEmailid@gmail.com" readonly>
                            </div>
                        </div>
                        <div>
                            <label>Password</label>
                            <div>
                                <input type="password" placeholder="Password">
                            </div>
                        </div>
                        <div>
                            <label>Role</label>
                            <div>
                                <select name="" id="">
                                <option>Set an Option</option>
                                <option>IT Manager</option>
                                <option>Sales Manager</option>
                                <option>Developer</option>
                                <option>Operations Manager</option>
                                <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <div>
                                <input type="number" placeholder="Phone Number">
                            </div>
                        </div>
                        <div>
                            <label>Curruancy</label>
                            <div>
                                <select name="" id="">
                                    <option>Set an Option</option>
                                    <option>United States Dollar</option>
                                    <option>Inidan Rupee</option>
                                    <option>Indonesian Rupiah</option>
                                    <option>Jamaican Dollar</option>
                                    <option>Euro</option>
                                    <option>Pakistani Rupee</option>
                                    <option>Saudi Riyal</option>
                                    <option>Nepalese Rupee</option>
                                </select>
                            </div>
                        </div>
                       
                    </div>
                </div>
    `
})

btnlist[2].addEventListener("click", function () {
secondS.innerHTML = `
<div id="sync">
<div>
<img width="40%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/prod/assets/img/google-meet-logo.png">
<p>Make and receive calls & SMS with your customers using GoogleMeet.</p>
<button>Enable</button>
</div>
<div>
<img width="35%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/widgets/zoom.png">
<p>Make and receive calls & SMS with your customers using Zoom.</p>
<button>Enable</button>
</div>
<div>
<img width="35%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/social/twilio-call.png">
<p>Make and receive calls & SMS with your customers using Twilio.</p>
<button>Enable</button>
</div>
<div>
<img width="10%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/widgets/sip.png">
<p>Make and receive calls & SMS with your customers using Sip.</p>
<button>Enable</button>
</div>
<div>
<img width="35%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/widgets/exotel.png">
<p>Make and receive calls & SMS with your customers using Exotel.</p>
<button>Enable</button>
</div>
<div>
<img width="30%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/widgets/stripe-logo.svg">
<p>Make and receive calls & SMS with your customers using Stripe.</p>
<button>Enable</button>
</div>
<div>
<img width="35%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/widgets/justcall.png">
<p>Make and receive calls & SMS with your customers using Justcall.</p>
<button>Enable</button>
</div>
<div>
<img width="12%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/widgets/smscountry.png">
<p>Make and receive calls & SMS with your customers using SmScountry.</p>
<button>Enable</button>
</div>
<div>
<img width="35%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/widgets/messagewhiz.png">
<p>Make and receive calls & SMS with your customers using MessageWhiz.</p>
<button>Enable</button>
</div>
<div>
<img width="40%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/prod/assets/img/google-meet-logo.png">
<p>Make and receive calls & SMS with your customers using GoogleMeet.</p>
<button>Enable</button>
</div>
<div>
<img width="35%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/widgets/zoom.png">
<p>Make and receive calls & SMS with your customers using Zoom.</p>
<button>Enable</button>
</div>
<div>
<img width="35%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/social/twilio-call.png">
<p>Make and receive calls & SMS with your customers using Twilio.</p>
<button>Enable</button>
</div>
<div>
<img width="10%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/widgets/sip.png">
<p>Make and receive calls & SMS with your customers using Sip.</p>
<button>Enable</button>
</div>
<div>
<img width="35%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/widgets/exotel.png">
<p>Make and receive calls & SMS with your customers using Exotel.</p>
<button>Enable</button>
</div>
<div>
<img width="30%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/widgets/stripe-logo.svg">
<p>Make and receive calls & SMS with your customers using Stripe.</p>
<button>Enable</button>
</div>
<div>
<img width="35%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/widgets/justcall.png">
<p>Make and receive calls & SMS with your customers using Justcall.</p>
<button>Enable</button>
</div>
<div>
<img width="12%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/widgets/smscountry.png">
<p>Make and receive calls & SMS with your customers using SmScountry.</p>
<button>Enable</button>
</div>
<div>
<img width="35%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/widgets/messagewhiz.png">
<p>Make and receive calls & SMS with your customers using MessageWhiz.</p>
<button>Enable</button>
</div>

</div>
`;
})

btnlist[4].addEventListener("click", function () {
secondS.innerHTML = `
<div id="sync">
<div>
<img width="35%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/google-contacts.png">
<p>Sync all your contacts, companies, tracks and deals from Google to EngageBay.</p>
<button>Enable</button>
</div>
<div>
<img width="35%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/hubspot.png">
<p>Sync all your contacts, companies, tracks and deals from HubSpot to EngageBay.</p>
<button>Enable</button>
</div>
<div>
<img width="15%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/salesforce.png">
<p>Sync all your contacts, accounts, tracks and deals from your Salesforce to EngageBay.</p>
<button>Enable</button>
</div>
<div>
<img width="35%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/office-365.png">
<p>Sync all your contacts, companies, tracks and deals from office365 to EngageBay.</p>
<button>Enable</button>
</div>
<div>
<img width="35%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/widgets/paypal.png">
<p>Sync all your contacts, companies, tracks and deals from Paypal to EngageBay.</p>
<button>Enable</button>
</div>
<div>
<img width="35%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/pipedrive.png">
<p>Sync all your contacts, companies, tracks and deals from Pendrive to EngageBay.</p>
<button>Enable</button>
</div>
<div>
<img width="11%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/xero-logo.png">
<p>Sync all your contacts, companies, tracks and deals from Xero to EngageBay.</p>
<button>Enable</button>
</div>
<div>
<img width="35%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/zoominfo.png">
<p>Sync all your contacts, companies, tracks and deals from Zoominfo to EngageBay.</p>
<button>Enable</button>
</div>
<div>
<img width="35%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/connectwise.png">
<p>Sync all your contacts, companies, tracks and deals from Connectwise to EngageBay.</p>
<button>Enable</button>
</div>
<div>
<img width="35%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/google-contacts.png">
<p>Sync all your contacts, companies, tracks and deals from Google to EngageBay.</p>
<button>Enable</button>
</div>
<div>
<img width="35%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/hubspot.png">
<p>Sync all your contacts, companies, tracks and deals from HubSpot to EngageBay.</p>
<button>Enable</button>
</div>
<div>
<img width="15%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/salesforce.png">
<p>Sync all your contacts, accounts, tracks and deals from your Salesforce to EngageBay.</p>
<button>Enable</button>
</div>
<div>
<img width="35%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/office-365.png">
<p>Sync all your contacts, companies, tracks and deals from office365 to EngageBay.</p>
<button>Enable</button>
</div>
<div>
<img width="35%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/widgets/paypal.png">
<p>Sync all your contacts, companies, tracks and deals from Paypal to EngageBay.</p>
<button>Enable</button>
</div>
<div>
<img width="35%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/pipedrive.png">
<p>Sync all your contacts, companies, tracks and deals from Pendrive to EngageBay.</p>
<button>Enable</button>
</div>
<div>
<img width="11%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/xero-logo.png">
<p>Sync all your contacts, companies, tracks and deals from Xero to EngageBay.</p>
<button>Enable</button>
</div>
<div>
<img width="35%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/zoominfo.png">
<p>Sync all your contacts, companies, tracks and deals from Zoominfo to EngageBay.</p>
<button>Enable</button>
</div>
<div>
<img width="35%" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/connectwise.png">
<p>Sync all your contacts, companies, tracks and deals from Connectwise to EngageBay.</p>
<button>Enable</button>
</div>
</div>
`;
})

// ----------------------------------------->

