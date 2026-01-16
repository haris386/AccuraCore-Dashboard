"use client";
import { useRef, useState } from "react";
import PagesHeader from "@/components/PagesHeader";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";

export default function TermsandConditions() {
  const [searchTerm, setSearchTerm] = useState("");

  // Map of section IDs to their titles
  const sections = {
    who: "Who May Use the Services",
    accounts: "User Accounts, Subscriptions, and free trials",
    location: "Location of Our Privacy Policy",
    rights: "Rights We Grant You",
    confidentiality: "Confidentiality, Ownership, and Content",
    thirdParty: "Third-Party Services and Materials",
    disclaimers: "Disclaimers, Limitations of Liability and Indemnification",
    arbitration: "Arbitration and Class Action Waiver",
    additional: "Additional Provisions",
  };

  const handleSearch = () => {
    // Find the first section whose title includes the search term
    const match = Object.entries(sections).find(([id, title]) =>
      title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (match) {
      const element = document.getElementById(match[0]);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <section style={{ backgroundColor: "#f4f0ed" }}>
        <PagesHeader />

        {/* TWO COLS LAYOUT */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-4 space-y-6">
              {/* Search Input */}
              <div
                className="flex items-center rounded-full px-4 py-3"
                style={{
                  backgroundColor: "#F8F8F8",
                  border: "8px solid white",
                }}
              >
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-sm text-black placeholder-gray-500"
                />
                <Search
                  className="w-5 h-5 text-gray-500 cursor-pointer"
                  onClick={handleSearch}
                />
              </div>

              {/* Table of Contents */}
              <div
                className="p-5"
                style={{
                  backgroundColor: "#F8F8F8",
                  border: "10px solid white",
                  borderRadius: "20px",
                }}
              >
                <h3 className="font-[500] text-sm mb-4">Table Of Contents</h3>

                <ol className="space-y-4 text-sm text-gray-700 list-decimal list-inside">
                  {Object.entries(sections).map(([id, title]) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className="hover:underline cursor-pointer"
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-8">
              <div className="overflow-hidden">
                {/* Row 1: Header */}
                <div
                  className="px-6 py-6"
                  style={{
                    backgroundColor: "#0061A4",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                >
                  <h1 className="text-white text-[20px] font-[500]">
                    Terms Of Service
                  </h1>
                </div>

                {/* Row 2: Content */}
                <div
                  className="px-6 py-6 text-sm text-black leading-relaxed"
                  style={{
                    backgroundColor: "#ffffff",
                    borderBottomLeftRadius: "20px",
                    borderBottomRightRadius: "20px",
                  }}
                >
                  <p className="mb-4 text-gray-700 text-[14px]">
                    Welcome to the Terms of Service (these “
                    <span className="font-bold">Terms</span>”) for the website,{" "}
                    <span className="font-bold">
                      https://www.accuracore.com
                    </span>{" "}
                    (the “<span className="font-bold">Website</span>”), on
                    behalf of AccuraCore (“Company”, “we” or “us”). The Website
                    and any content, tools, features, and functionality offered
                    on or through our Website, desktop app, or mobile app are
                    collectively referred to as the “
                    <span className="font-bold">Services</span>”.
                  </p>

                  <p className="mb-4 text-gray-700 text-[14px]">
                    These Terms govern your access to and use of the Services.
                    Please read these Terms carefully, as they include important
                    information about your legal rights. By accessing and/or
                    using the Services, you are agreeing to these Terms. If you
                    do not understand or agree to these Terms, please do not use
                    the Services.
                  </p>

                  <p className="mb-4 text-gray-700 text-[14px]">
                    For the purposes of these Terms, “you” and “your” means you
                    as the user of the Services. If you use the Services on
                    behalf of a company or other entity, then “you” includes you
                    and that entity, and you represent and warrant that (a) you
                    are an authorized representative of the entity with the
                    authority to bind the entity to these Terms, and (b) you
                    agree to these Terms on the entity’s behalf.
                  </p>

                  <p className="mb-4 text-gray-700 text-[14px]">
                    <span className="font-bold">
                      Section 8 contains an arbitration clause and class action
                      waiver. By agreeing to these Terms, you agree (a) to
                      resolve all disputes (with limited exception) related to
                      the Company’s Services AND/or products through binding
                      individual arbitration, which means that you waive any
                      right to have those disputes decided by a judge or jury,
                      and (b) to waive your right to participate in class
                      actions, class arbitrations, or representative actions, as
                      set forth below. You have the right to opt out of the
                      arbitration clause and the class action waiver, as
                      explained in Section 8.
                    </span>
                  </p>
                </div>
              </div>

              <h1 id="who" className="text-[20px] font-[500] mt-10 mb-4">
                1. Who May Use the Services
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  You must be 18 years of age or older and reside in the United
                  States or any of its territories to use the Services. By using
                  the Services, you represent and warrant that you meet these
                  requirements.
                </p>
              </div>

              <h1 id="accounts" className="text-[20px] font-[500] mt-10 mb-4">
                2. User Accounts, Subscriptions, and free trials
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <h1 className="text-[17px] font-semibold mb-3">
                  Creating and Safeguarding Your Account
                </h1>
                <p className="mb-4 text-gray-700 text-[14px]">
                  To use the Services, you need to create an account or link
                  another account, such as your Apple, Facebook, or Google
                  account (“Account”). You agree to provide us with accurate,
                  complete, and updated information for your Account. You can
                  access, edit, and update your Account via the AccuraCore web
                  application. You are solely responsible for any activity on
                  your Account and for maintaining the confidentiality and
                  security of your password. We are not liable for any acts or
                  omissions by you in connection with your Account. You must
                  immediately notify us at{" "}
                  <span className="font-bold">support@accuracore.com</span> if
                  you know or have any reason to suspect that your Account or
                  password has been stolen, misappropriated, or otherwise
                  compromised, or in case of any actual or suspected
                  unauthorized use of your Account. You agree not to create any
                  Account if we have previously removed you or we previously
                  banned you from any of our Services unless we provide written
                  consent otherwise.
                </p>
                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Subscription Payment
                </h1>
                <p className="mb-4 text-gray-700 text-[14px]">
                  If you buy or subscribe to any of our paid Services, you agree
                  to pay us the applicable fees and taxes in U.S. Dollars.
                  Failure to pay these fees and taxes will result in the
                  termination of your access to the paid Services. You agree
                  that (a) if you purchase a recurring subscription to any of
                  the Services, our PCI-DSS compliant payment processor may
                  store and continue billing your payment method (e.g., credit
                  card) to avoid interruption of such Services, and (b) we may
                  calculate taxes payable by you based on the billing
                  information that you provide us at the time of purchase. We
                  reserve the right to change our subscription plans or adjust
                  pricing for the Services in any manner and at any time as we
                  may determine in our sole and absolute discretion. Except as
                  otherwise provided in these Terms, any price changes or
                  changes to your subscription plan will take effect following
                  reasonable notice to you via email. All subscriptions are
                  payable in accordance with payment terms within the app in
                  effect at the time the subscription becomes payable. Payment
                  can be made by credit card, debit card, or other means that we
                  may make available. Subscriptions will not be processed until
                  payment has been received in full, and any holds on your
                  account by any other payment processor are solely your
                  responsibility
                </p>

                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Subscription Renewals and Cancellations
                </h1>
                <p className="mb-4 text-gray-700 text-[14px]">
                  If you buy or subscribe to any of our paid Services, you agree
                  to pay us the applicable fees and taxes in U.S. Dollars.
                  Failure to pay these fees and taxes will result in the
                  termination of your access to the paid Services. You agree
                  that (a) if you purchase a recurring subscription to any of
                  the Services, our PCI-DSS compliant payment processor may
                  store and continue billing your payment method (e.g., credit
                  card) to avoid interruption of such Services, and (b) we may
                  calculate taxes payable by you based on the billing
                  information that you provide us at the time of purchase. We
                  reserve the right to change our subscription plans or adjust
                  pricing for the Services in any manner and at any time as we
                  may determine in our sole and absolute discretion. Except as
                  otherwise provided in these Terms, any price changes or
                  changes to your subscription plan will take effect following
                  reasonable notice to you via email. All subscriptions are
                  payable in accordance with payment terms within the app in
                  effect at the time the subscription becomes payable. Payment
                  can be made by credit card, debit card, or other means that we
                  may make available. Subscriptions will not be processed until
                  payment has been received in full, and any holds on your
                  account by any other payment processor are solely your
                  responsibility
                </p>

                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Subscription Renewals and Cancellations
                </h1>
                <p className="mt-4 mb-4 text-gray-700 text-[14px]">
                  You agree that if you purchase a subscription, your
                  subscription will automatically renew at the subscription
                  period frequency referenced on your subscription page (or if
                  not designated, then monthly) and at the then-current rates,
                  and your payment method will automatically be charged at the
                  start of each new subscription period for the fees and taxes
                  applicable to that period. To avoid future subscription
                  charges, you may cancel your subscription to the Services at
                  any time by visiting your billing page and clicking “change
                  subscription.”
                </p>
                <p className="mb-4 text-gray-700 text-[14px]">
                  All cancellations require a 14-day notice prior to
                  cancellation taking effect.
                </p>

                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  No Subscription Refunds
                </h1>
                <p className="mt-4 mb-4 text-gray-700 text-[14px]">
                  Except as expressly set forth in these Terms, payments for any
                  subscriptions to the Services are nonrefundable, and there are
                  no credits for partially used periods. Following any
                  cancellation by you, however, you will continue to have access
                  to the paid Services through the end of the subscription
                  period for which payment has already been made.
                </p>

                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Free Trials
                </h1>
                <p className="mt-4 mb-4 text-gray-700 text-[14px]">
                  You can sign up for a trial Account for the paid portion of
                  the Services, and your trial period starts on the day you
                  create the trial Account and lasts for the duration indicated
                  on your free trial confirmation email (or, if not specified,
                  then 14 days). If you are on a trial, you may cancel at any
                  time until the last day of your trial by following the
                  cancellation procedures outlined in Section 2.2 above. If you
                  do not cancel your trial Account at the end of your free trial
                  period, and we have notified you that your Account will be
                  converted to a paid subscription at the end of the free trial
                  period, you authorize us to charge your credit card or other
                  designated billing method for continued use of the paid
                  Services. You may, however, then cancel your subscription in
                  accordance with Section 2.3 of these Terms. If you cancel your
                  trial Account or decide not to purchase a paid version of the
                  Services at the end of your trial period, your content or data
                  associated with your trial Account will no longer be available
                  to you, and the Company may delete or remove any such content
                  or data.
                </p>
              </div>

              <h1 id="location" className="text-[20px] font-[500] mt-10 mb-4">
                3. Location of Our Privacy Policy
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Privacy Policy
                </h1>
                <p className="mb-4 text-gray-700 text-[14px]">
                  Our Privacy Policy describes how we handle information,
                  including personal information, that you provide or otherwise
                  make available to us when you use the Services. For an
                  explanation of our privacy practices, please visit our Privacy
                  Policy located at{" "}
                  <a href="#https://www.accuracore.com/privacy-policy/">
                    https://www.accuracore.com/privacy-policy/.
                  </a>
                </p>
              </div>

              <h1 id="rights" className="text-[20px] font-[500] mt-10 mb-4">
                4. Rights We Grant You
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Right to Use Services
                </h1>
                <p className="mb-4 text-gray-700 text-[14px]">
                  We hereby permit you to use the Services for your own internal
                  business purposes only, provided that you comply with these
                  Terms in connection with all such use. If any software,
                  content, or other materials owned or controlled by us are
                  distributed to you as part of your use of the Services, we
                  hereby grant you a personal, non-assignable,
                  non-sublicensable, non-transferrable, and non-exclusive right
                  and license to access and display such software, content, and
                  materials provided to you as part of the Services, in each
                  case for the sole purpose of enabling you to use the Services
                  as permitted by these Terms. Your access to and use of the
                  Services may be interrupted from time to time for any of
                  several reasons, including, without limitation, the
                  malfunction of equipment, periodic updating, maintenance, or
                  repair of the Service, or other actions that Company, in its
                  sole discretion, may elect to take.
                </p>
                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Restrictions On Your Use of the Services
                </h1>
                <p className="mb-4 text-gray-700 text-[14px]">
                  You may not do any of the following in connection with your
                  use of the Services unless applicable laws or regulations
                  prohibit these restrictions or you have our written permission
                  to do so:
                </p>
                <ul className="space-y-4 text-sm text-gray-700 list-inside list-[lower-alpha]">
                  <li>
                    Download, modify, copy, distribute, transmit, display,
                    perform, reproduce, duplicate, publish, license, create
                    derivative works from, or offer for sale any information
                    contained on, or obtained from or through, the Services,
                    except for temporary files that are automatically cached by
                    your web browser for display purposes, or as otherwise
                    expressly permitted in these Terms;
                  </li>
                  <li>
                    Duplicate, decompile, reverse engineer, disassemble or
                    decode the Services (including any underlying idea or
                    algorithm), or attempt to do any of the same;
                  </li>
                  <li>
                    Use, reproduce, or remove any copyright, trademark, service
                    mark, trade name, slogan, logo, image, or other proprietary
                    notation displayed on or through the Services;
                  </li>
                  <li>
                    Use cheats, automation software (bots), hacks, modifications
                    (mods), or any other unauthorized third-party software
                    designed to modify the Services;
                  </li>
                  <li>
                    Exploit the Services for any commercial purpose, including,
                    without limitation, communicating or facilitating any
                    commercial advertisement or solicitation;
                  </li>
                  <li>
                    Access or use the Services in any manner that could disable,
                    overburden, damage, disrupt, or impair the Services or
                    interfere with any other party’s access to or use of the
                    Services or use any device, software, or routine that causes
                    the same;
                  </li>
                  <li>
                    Attempt to gain unauthorized access to, interfere with,
                    damage, or disrupt the Services, accounts registered to
                    other users, or the computer systems or networks connected
                    to the Services;
                  </li>
                  <li>
                    Circumvent, remove, alter, deactivate, degrade, or thwart
                    any technological measure or content protections of the
                    Services;
                  </li>
                  <li>
                    Use any robot, spider, crawler, scraper, or other automatic
                    device, process, software, or queries that intercepts,
                    “mines,” scrapes, extracts, or otherwise accesses the
                    Services to monitor, extract, copy, or collect information
                    or data from or through the Services, or engage in any
                    manual process to do the same;
                  </li>
                  <li>
                    Introduce any viruses, trojan horses, worms, logic bombs, or
                    other materials that are malicious or technologically
                    harmful into our systems;
                  </li>
                  <li>
                    Submit, transmit, display, perform, post, or store any
                    content that is unlawful, defamatory, obscene, excessively
                    violent, pornographic, invasive of privacy or publicity
                    rights, harassing, abusive, hateful, or cruel, or otherwise
                    use the Services in a manner that is obscene, excessively
                    violent, harassing, hateful, cruel, abusive, pornographic,
                    inciting, organizing, promoting or facilitating violence or
                    criminal activities;
                  </li>
                  <li>
                    Violate any applicable law or regulation in connection with
                    your access to or use of the Services;
                  </li>
                  <li>
                    Access or use the Services in any way not expressly
                    permitted by these Terms;
                  </li>
                  <li>
                    Facilitate or permit any third party to do any of the
                    foregoing.
                  </li>
                </ul>

                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  SMS Communications
                </h1>
                <p className="mb-4 text-gray-700 text-[14px]">
                  Upon messaging opt-in, the end user agrees to receive messages
                  from AccuraCore regarding their account updates, service
                  notifications, and support. End users can opt-out by replying
                  STOP or request more information by replying HELP. Message
                  frequency varies. Message and data rates may apply. You may
                  review our Privacy Policy to learn how your data is used.
                </p>
              </div>

              <h1 id="disclaimers" className="text-[20px] font-[500] mt-10 mb-4">
                7. Disclaimers, Limitations of Liability and Indemnification
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Disclaimers
                </h1>
                <ul className="space-y-4 text-sm text-gray-700 list-inside list-[lower-alpha]">
                  <li>
                    Your access to and use of the Services are at your own risk.
                    You understand and agree that the Services are provided to
                    you on an “AS IS” and “AS AVAILABLE” basis. Without limiting
                    the foregoing, to the maximum extent permitted under
                    applicable law, the Company, its parents, affiliates,
                    related companies, officers, directors, employees, agents,
                    representatives, partners and licensors (the “Company
                    Entities”) DISCLAIM ALL WARRANTIES AND CONDITIONS, WHETHER
                    EXPRESS OR IMPLIED, OF MERCHANTABILITY, FITNESS FOR A
                    PARTICULAR PURPOSE OR NON-INFRINGEMENT. The Company Entities
                    make no warranty or representation and disclaim all
                    responsibility and liability for: (a) the completeness,
                    accuracy, availability, timeliness, security, or reliability
                    of the Services; (b) any harm to your computer system, loss
                    of data, or other harm that results from your access to or
                    use of the Services; (c) the operation or compatibility with
                    any other application or any particular system or device;
                    (d) whether the Services will meet your requirements or be
                    available on an uninterrupted, secure or error-free basis;
                    and (e) the deletion of, or the failure to store or
                    transmit, Your Content and other communications maintained
                    by the Services. No advice or information, whether oral or
                    written, obtained from the Company Entities or through the
                    Services, will create any warranty or representation not
                    expressly made herein.
                  </li>
                  <li>
                    THE LAWS OF CERTAIN JURISDICTIONS, INCLUDING THE STATE OF
                    NEW JERSEY, DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES
                    OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES AS SET
                    FORTH IN SECTION 7.2 BELOW. IF THESE LAWS APPLY TO YOU, SOME
                    OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS, OR LIMITATIONS
                    MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
                  </li>
                  <li>
                    THE COMPANY ENTITIES TAKE NO RESPONSIBILITY AND ASSUME NO
                    LIABILITY FOR ANY CONTENT THAT YOU, ANOTHER USER, OR A THIRD
                    PARTY CREATES, UPLOADS, POSTS, SENDS, RECEIVES, OR STORES ON
                    OR THROUGH OUR SERVICES.
                  </li>
                  <li>
                    YOU UNDERSTAND AND AGREE THAT YOU MAY BE EXPOSED TO CONTENT
                    THAT MIGHT BE OFFENSIVE, ILLEGAL, MISLEADING, OR OTHERWISE
                    INAPPROPRIATE, NONE OF WHICH THE COMPANY ENTITIES WILL BE
                    RESPONSIBLE FOR.
                  </li>
                </ul>
                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Limitations of Liability
                </h1>
                <p className="mb-4 text-gray-700 text-[14px]">
                  TO THE EXTENT NOT PROHIBITED BY LAW, YOU AGREE THAT IN NO
                  EVENT WILL THE COMPANY ENTITIES BE LIABLE (A) FOR DAMAGES OF
                  ANY KIND, INCLUDING INDIRECT, SPECIAL, EXEMPLARY, INCIDENTAL,
                  CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING, BUT NOT LIMITED
                  TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, LOSS OF USE,
                  DATA OR PROFITS, BUSINESS INTERRUPTION OR ANY OTHER DAMAGES OR
                  LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OR INABILITY TO
                  USE THE SERVICES), HOWEVER CAUSED AND UNDER ANY THEORY OF
                  LIABILITY, WHETHER UNDER THESE TERMS OR OTHERWISE ARISING IN
                  ANY WAY IN CONNECTION WITH THE SERVICES OR THESE TERMS AND
                  WHETHER IN CONTRACT, STRICT LIABILITY OR TORT (INCLUDING
                  NEGLIGENCE OR OTHERWISE) EVEN IF THE COMPANY ENTITIES HAVE
                  BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE, OR (B) FOR ANY
                  OTHER CLAIM, DEMAND OR DAMAGES WHATSOEVER RESULTING FROM OR
                  ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR THE
                  DELIVERY, USE OR PERFORMANCE OF THE SERVICES. THE COMPANY
                  ENTITIES’ TOTAL LIABILITY TO YOU FOR ANY DAMAGES FINALLY
                  AWARDED SHALL NOT EXCEED THE GREATER OF ONE HUNDRED DOLLARS
                  ($100.00), OR THE AMOUNT YOU PAID THE COMPANY ENTITIES, IF
                  ANY, IN THE PAST SIX (6) MONTHS FOR THE SERVICES (OR OFFERINGS
                  PURCHASED ON THE SERVICES) GIVING RISE TO THE CLAIM. THE
                  FOREGOING LIMITATIONS WILL APPLY EVEN IF THE ABOVE-STATED
                  REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
                </p>
                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Indemnification
                </h1>
                <p className="mb-4 text-gray-700 text-[14px]">
                  By entering into these Terms and accessing or using the
                  Services, you agree that you shall defend, indemnify, and hold
                  the Company Entities harmless from and against any and all
                  claims, costs, damages, losses, liabilities, and expenses
                  (including attorneys’ fees and costs) incurred by the Company
                  Entities arising out of or in connection with: (a) your
                  violation or breach of any term of these Terms or any
                  applicable law or regulation; (b) your violation of any rights
                  of any third party; (c) your misuse of the Services; (d) Your
                  Content, or (e) your negligence or willful misconduct. If you
                  are obligated to indemnify any Company Entity hereunder, then
                  you agree that Company (or, at its discretion, the applicable
                  Company Entity) will have the right, in its sole discretion,
                  to control any action or proceeding and to determine whether
                  Company wishes to settle, and if so, on what terms, and you
                  agree to fully cooperate with Company in the defense or
                  settlement of such claim.
                </p>
              </div>

              <h1 id="arbitration" className="text-[20px] font-[500] mt-10 mb-4">
                8. Arbitration and Class Action Waiver
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Please Read
                </h1>
                <p className="mb-4 text-gray-700 text-[14px]">
                  PLEASE READ THIS SECTION{" "}
                  <span className="font-bold">
                    CAREFULLY – IT MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS,
                    INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT AND TO HAVE
                    A JURY HEAR YOUR CLAIMS. IT CONTAINS PROCEDURES FOR
                    MANDATORY BINDING ARBITRATION AND A CLASS ACTION WAIVER.
                  </span>
                </p>
                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Informal Process First
                </h1>
                <p className="mb-4 text-gray-700 text-[14px]">
                  You and the Company agree that in the event of any dispute,
                  either party will first contact the other party and make a
                  good faith sustained effort to resolve the dispute before
                  resorting to more formal means of resolution, including,
                  without limitation, any court action, after first allowing the
                  receiving party 30 days in which to respond. Both you and the
                  Company agree that, subject to Section 8.4 below, this dispute
                  resolution procedure is a condition precedent which must be
                  satisfied before initiating any arbitration against the other
                  party.
                </p>
                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Arbitration Agreement and Class Action Waiver
                </h1>
                <p className="mb-4 text-gray-700 text-[14px]">
                  After the informal dispute resolution process, any remaining
                  dispute, controversy, or claim (collectively,{" "}
                  <span className="font-bold">“Claim”</span>) relating in any
                  way to the Company’s services and/or products, including the
                  Services, and any use or access or lack of access thereto,
                  will be resolved by arbitration, including threshold questions
                  of arbitrability of the Claim. You and the Company agree that
                  any Claim will be settled by final and binding arbitration,
                  using the English language, administered by Judicial
                  Arbitration and Mediation Services, Inc. (
                  <span className="font-bold">“JAMS”</span>) under its
                  Comprehensive Arbitration Rules and Procedures (the
                  <span className="font-bold">“JAMS Rules”</span>) then in
                  effect (those rules are deemed to be incorporated by reference
                  into this section, and as of the date of these Terms). Because
                  your contract with the Company, these Terms, and this
                  Arbitration Agreement concern interstate commerce, the Federal
                  Arbitration Act (<span className="font-bold">“FAA”</span>)
                  governs the arbitrability of all disputes. However, the
                  arbitrator will apply applicable substantive law consistent
                  with the FAA and the applicable statute of limitations or
                  condition precedent to suit. Arbitration will be handled by a
                  sole arbitrator in accordance with the JAMS Rules. Judgment on
                  the arbitration award may be entered in any court that has
                  jurisdiction. Any arbitration under these Terms will take
                  place on an individual basis – class arbitrations and class
                  actions are not permitted. You understand that by agreeing to
                  these Terms, you and the Company are each waiving the right to
                  trial by jury or to participate in a class action or class
                  arbitration.
                </p>
                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Exceptions
                </h1>
                <p className="mb-4 text-gray-700 text-[14px]">
                  Notwithstanding the foregoing, you and the Company agree that
                  the following types of disputes will be resolved in a court of
                  proper jurisdiction:
                </p>
                <ul className="space-y-4 text-sm text-gray-700 list-disc list-inside">
                  <li>
                    Disputes or claims within the jurisdiction of a small claims
                    court consistent with the jurisdictional and dollar limits
                    that may apply, as long as it is brought and maintained as
                    an individual dispute and not as a class, representative, or
                    consolidated action or proceeding;
                  </li>
                  <li>
                    Disputes or claims where the sole form of relief sought is
                    injunctive relief (including public injunctive relief):
                  </li>
                  <li>Intellectual property disputes.</li>
                </ul>
                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Costs of Arbitration
                </h1>
                <p className="mt-5 mb-4 text-gray-700 text-[14px]">
                  Payment of all filing, administration, and arbitrator costs
                  and expenses will be governed by the JAMS Rules, except that
                  if you demonstrate that any such costs and expenses owed by
                  you under those rules would be prohibitively more expensive
                  than a court proceeding, the Company will pay the amount of
                  any such costs and expenses that the arbitrator determines are
                  necessary to prevent the arbitration from being prohibitively
                  more expensive than a court proceeding (subject to possible
                  reimbursement as set forth below).
                </p>

                <p className="mb-4 text-gray-700 text-[14px]">
                  Fees and costs may be awarded as provided pursuant to
                  applicable law. If the arbitrator finds that either the
                  substance of your claim or the relief sought in the demand is
                  frivolous or brought for an improper purpose (as measured by
                  the standards set forth in Federal Rule of Civil Procedure
                  11(b)), then the payment of all fees will be governed by the
                  JAMS Rules. In that case, you agree to reimburse the Company
                  for all monies previously disbursed by it that are otherwise
                  your obligation to pay under the applicable rules. If you
                  prevail in the arbitration and are awarded an amount that is
                  less than the last written settlement amount offered by the
                  Company before the arbitrator was appointed, the Company will
                  pay you the amount it offered in settlement. The arbitrator
                  may make rulings and resolve disputes as to the payment and
                  reimbursement of fees or expenses at any time during the
                  proceeding and upon request from either party made within 14
                  days of the arbitrator’s ruling on the merits.
                </p>
                <h1 className="text-[17px] font-semibold mt-5 mb-3">Opt-Out</h1>
                <p className="mt-5 mb-4 text-gray-700 text-[14px]">
                  <span className="font-bold">
                    You have the right to opt-out and not be bound by the
                    arbitration provisions set forth in these Terms by sending
                    written notice of your decision to opt-out to
                    support@accuracore.com or to the U.S. mailing address listed
                    in the “How to Contact Us” section of these Terms. The
                    notice must be sent to the Company within thirty (30) days
                    of your first registering to use the Services or agreeing to
                    these Terms; otherwise, you shall be bound to arbitrate
                    disputes on a non-class basis in accordance with these
                    Terms. If you opt out of only the arbitration provisions,
                    and not also the class action waiver, the class action
                    waiver still applies. You may not opt-out of only the class
                    action waiver and not also the arbitration provisions. If
                    you opt out of these arbitration provisions, the Company
                    also will not be bound by them.
                  </span>
                </p>
                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  WAIVER OF RIGHT TO BRING CLASS ACTION AND REPRESENTATIVE
                  CLAIMS
                </h1>
                <p className="mt-5 mb-4 text-gray-700 text-[14px]">
                  To the fullest extent permitted by applicable law, you and the
                  Company each agree that any proceeding to resolve any dispute,
                  claim, or controversy will be brought and conducted ONLY IN
                  THE RESPECTIVE PARTY’S INDIVIDUAL CAPACITY AND NOT AS PART OF
                  ANY CLASS (OR PURPORTED CLASS), CONSOLIDATED,
                  MULTIPLE-PLAINTIFF, OR REPRESENTATIVE ACTION OR PROCEEDING
                  (“CLASS ACTION”). You and the Company AGREE TO WAIVE THE RIGHT
                  TO PARTICIPATE AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS
                  ACTION. You and the Company EXPRESSLY WAIVE ANY ABILITY TO
                  MAINTAIN A CLASS ACTION IN ANY FORUM. If the dispute is
                  subject to arbitration, THE ARBITRATOR WILL NOT HAVE THE
                  AUTHORITY TO COMBINE OR AGGREGATE CLAIMS, CONDUCT A CLASS
                  ACTION, OR MAKE AN AWARD TO ANY PERSON OR ENTITY NOT A PARTY
                  TO THE ARBITRATION. Further, you and the Company agree that
                  the ARBITRATOR MAY NOT CONSOLIDATE PROCEEDINGS FOR MORE THAN
                  ONE PERSON’S CLAIMS, AND IT MAY NOT OTHERWISE PRESIDE OVER ANY
                  FORM OF A CLASS ACTION. For the avoidance of doubt, however,
                  you can seek public injunctive relief to the extent authorized
                  by law and consistent with the Exceptions clause above.
                </p>
                <p className="mt-5 mb-4 text-gray-700 text-[14px]">
                  IF THIS CLASS ACTION WAIVER IS LIMITED, VOIDED, OR FOUND
                  UNENFORCEABLE, THEN, UNLESS THE PARTIES MUTUALLY AGREE
                  OTHERWISE, THE PARTIES’ AGREEMENT TO ARBITRATE SHALL BE NULL
                  AND VOID WITH RESPECT TO SUCH PROCEEDING SO LONG AS THE
                  PROCEEDING IS PERMITTED TO PROCEED AS A CLASS ACTION. If a
                  court decides that the limitations of this paragraph are
                  deemed invalid or unenforceable, any putative class, private
                  attorney general, or consolidated or representative action
                  must be brought in a court of proper jurisdiction and not in
                  arbitration.
                </p>
              </div>

              <h1 id="additional" className="text-[20px] font-[500] mt-10 mb-4">
                9. Additional Provisions
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Updating These Terms
                </h1>
                <p className="mb-4 text-gray-700 text-[14px]">
                  We may modify these Terms from time to time, in which case we
                  will update the “Last Revised” date at the top of these Terms.
                  If we make changes that are material, we will use reasonable
                  efforts to attempt to notify you, such as by email and/or by
                  placing a prominent notice on the first page of the Website.
                  However, it is your sole responsibility to review these Terms
                  from time to time to view any such changes. The updated Terms
                  will be effective as of the time of posting, or such later
                  date as may be specified in the updated Terms. Your continued
                  access or use of the Services after the modifications have
                  become effective will be deemed your acceptance of the
                  modified Terms. No amendment shall apply to a dispute for
                  which an arbitration has been initiated prior to the change in
                  Terms.
                </p>
                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Termination of License and Your Account
                </h1>
                <p className="mb-4 text-gray-700 text-[14px]">
                  If you breach any of the provisions of these Terms, all
                  licenses granted by the Company will terminate automatically.
                  Additionally, the Company may suspend, disable, or delete your
                  Account and/or the Services (or any part of the foregoing)
                  with or without notice, for any or no reason. If the Company
                  deletes your Account for any suspected breach of these Terms
                  by you, you are prohibited from re-registering for the
                  Services under a different name. In the event of Account
                  deletion for any reason, the Company may, but is not obligated
                  to, delete any of Your Content. The Company shall not be
                  responsible for the failure to delete or deletion of Your
                  Content. All sections which by their nature should survive the
                  termination of these Terms shall continue in full force and
                  effect subsequent to and notwithstanding any termination of
                  these Terms by the Company or you. Termination will not limit
                  any of the Company’s other rights or remedies at law or in
                  equity.
                </p>
                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Injunctive Relief
                </h1>
                <p className="mb-4 text-gray-700 text-[14px]">
                  You agree that a breach of these Terms will cause irreparable
                  injury to the Company for which monetary damages would not be
                  an adequate remedy, and the Company shall be entitled to
                  equitable relief in addition to any remedies it may have
                  hereunder or at law without a bond, other security or proof of
                  damages.
                </p>
                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  California Residents
                </h1>
                <p className="mb-4 text-gray-700 text-[14px]">
                  If you are a California resident, in accordance with Cal. Civ.
                  Code § 1789.3, you may report complaints to the Complaint
                  Assistance Unit of the Division of Consumer Services of the
                  California Department of Consumer Affairs by contacting them
                  in writing at 1625 North Market Blvd., Suite N 112 Sacramento,
                  CA 95834, or by telephone at (800) 952-5210.
                </p>
                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Export Laws
                </h1>
                <p className="mt-5 mb-4 text-gray-700 text-[14px]">
                  You agree that you will not export or re-export, directly or
                  indirectly, the Services and/or other information or materials
                  provided by the Company hereunder to any country for which the
                  United States, or any other relevant jurisdiction requires any
                  export license or other governmental approval at the time of
                  export without first obtaining such license or approval. In
                  particular, but without limitation, the Services may not be
                  exported or re-exported (a) into any U.S. embargoed countries
                  or any country that has been designated by the U.S. Government
                  as a “terrorist supporting” country, or (b) to anyone listed
                  on any U.S. Government list of prohibited or restricted
                  parties, including the U.S. Treasury Department’s list of
                  Specially Designated Nationals, the U.S. Department of
                  Commerce Denied Person’s List or Entity List. By using the
                  Services, you represent and warrant that you are not located
                  in any such country or on any such list. You are responsible
                  for and hereby agree to comply at your sole expense with all
                  applicable United States export laws and regulations.
                </p>
                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Miscellaneous
                </h1>
                <p className="mb-4 text-gray-700 text-[14px]">
                  If any provision of these Terms shall be unlawful, void, or
                  for any reason unenforceable, then that provision shall be
                  deemed severable from these Terms and shall not affect the
                  validity and enforceability of any remaining provisions. These
                  Terms and the licenses granted hereunder may be assigned by
                  the Company but may not be assigned by you without the prior
                  express written consent of the Company. No waiver by either
                  party of any breach or default hereunder shall be deemed to be
                  a waiver of any preceding or subsequent breach or default. The
                  section headings used herein are for reference only and shall
                  not be read to have any legal effect. The Services are
                  operated by us in the United States. Those who choose to
                  access the Services from locations outside the United States
                  do so at their own initiative and are responsible for
                  compliance with applicable local laws. These Terms are
                  governed by the laws of the state of Illinois and the federal
                  laws applicable therein, without regard to conflict of laws
                  rules, and the proper venue for any disputes arising out of or
                  relating to any of the same will be the arbitration venue set
                  forth in Section 8, or if arbitration does not apply, then the
                  courts of competent jurisdiction located in Illinois, United
                  States. You and the Company agree that the United Nations
                  Convention on Contracts for the International Sale of Goods
                  will not apply to the interpretation or construction of these
                  Terms.
                </p>
              </div>
              <h1 id="how" className="text-[20px] font-[500] mt-10 mb-4">
                How to Contact Us
              </h1>
              <div
                className="px-6 py-6 text-sm leading-relaxed"
                style={{
                  borderRadius: "30px",
                  backgroundImage: `url("/Images/9.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "#ffffff",
                }}
              >
                <p className="mb-4 text-white text-[14px]">
                  Should you have any questions about our privacy practices or
                  this Privacy Notice, please email us at{" "}
                  <a
                    href="mailto:support@accuracore.com"
                    className="font-bold underline"
                  >
                    support@accuracore.com
                  </a>{" "}
                  or contact us at AccuraCore, 8910 W 192nd St Unit M, Mokena,
                  IL 60448.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}
