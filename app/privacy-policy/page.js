import PagesHeader from "@/components/PagesHeader";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";

export default function PrivacyPolicy() {
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
                  className="flex-1 bg-transparent outline-none text-sm text-black placeholder-gray-500"
                />
                <Search className="w-5 h-5 text-gray-500" />
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
                  <li>Changes to This Privacy Notice</li>
                  <li>Collection and Use of Your Information</li>
                  <li>Disclosure of Your Information</li>
                  <li>Third-Party Websites and Links</li>
                  <li>Children&apos;s Privacy</li>
                  <li>Data Security and Retention</li>
                  <li>California Residents</li>
                  <li>Residents of Other U.S. States</li>
                  <li>How to Contact Us</li>
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
                    Privacy Policy
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
                    This Privacy Notice describes how Sparx Technologies, LLC
                    (“AccuraCore”, “we,” “us,” “our”) collects, uses and
                    discloses information about individuals who use our websites
                  </p>

                  <p className="mb-4 text-gray-700 text-[14px]">
                    (https://www.accuracore.com/ , https://www.sparxtech.com/),
                    applications, services, tools, and features, or otherwise
                    interact with us (collectively, the “Services”). For the
                    purposes of this Privacy Notice, “you” and “your” means you
                    as the user of any of the Services, whether you are a
                    customer, website visitor, job applicant, representative of
                    a company with whom we do business, or another individual
                    whose information we have collected pursuant to this Privacy
                    Notice. Please note that the Services are designed for users
                    in the United States only and are not intended for users
                    located outside the United States.
                  </p>

                  <p className="mb-4 text-gray-700 text-[14px]">
                    Please read this Privacy Notice carefully. By using any of
                    the Services, you agree to the collection, use, and
                    disclosure of your information as described in this Privacy
                    Notice. If you do not agree to this Privacy Notice, please
                    do not use or access the Services.
                  </p>
                </div>
              </div>

              <h1 className="text-[20px] font-[500] mt-10 mb-4">
                1. Changes to This Privacy Notice
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  We may modify this Privacy Notice from time to time, in which
                  case we will update the “Last Updated” date at the top of this
                  Privacy Notice. If we make material changes to the way in
                  which we collect, use or disclose personal information, we
                  will use reasonable efforts to notify you (such as by emailing
                  you at the last email address you provided us, by posting
                  notice of such changes on the Services, or by other means
                  consistent with applicable law) and will take additional steps
                  as required by applicable law. If you do not agree to any
                  updates to this Privacy Notice, please do not continue using
                  or accessing the Services.
                </p>
              </div>

              <h1 className="text-[20px] font-[500] mt-10 mb-4">
                2. Collection and Use of Your Information
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  When you use or access the Services, we collect certain
                  categories of information about you from a variety of sources.
                </p>
                <h1 className="text-[17px] font-semibold mb-3">
                  Information You Provide to Us
                </h1>
                <p className="mb-4 text-gray-700 text-[14px]">
                  Some features of the Services may require you to directly
                  provide us with certain information about yourself. You may
                  elect not to provide this information, but doing so may
                  prevent you from using or accessing these features.
                  Information that you directly submit through our Services
                  includes:
                </p>
                <ul className="space-y-4 text-sm text-gray-700 list-disc list-inside">
                  <li>
                    <span className="font-bold">Basic contact details,</span>{" "}
                    such as name, address, phone number, and email. We use this
                    information to create and maintain your account and provide
                    the Services, and to communicate with you (including to tell
                    you about products or services that may be of interest to
                    you).
                  </li>
                  <li>
                    <span className="font-bold">Phone number,</span> including
                    mobile phone numbers. We collect these to provide updates,
                    announcements, and support. This information is used solely
                    for business communications and to enhance the customer
                    experience.
                  </li>
                  <li>
                    <span className="font-bold">Account information,</span> such
                    as username and password. We use this information to provide
                    the Services and to maintain and secure your account with
                    us. If you choose to register an account, you are
                    responsible for keeping your account credentials safe. We
                    recommend you do not share your access details with anyone
                    else. If you believe your account has been compromised,
                    please contact us immediately.
                  </li>
                  <li>
                    <span className="font-bold">Payment information,</span> such
                    as credit or debit card information, and billing address,
                    which we collect and process using a third-party payment
                    processor. We use this information to process your payment
                    and provide the Services.
                  </li>
                  <li>
                    <span className="font-bold">Any other information</span> you
                    choose to include in communications with us, for example,
                    when communicating with us through the Services.
                  </li>
                </ul>
                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Information We Collect Automatically
                </h1>
                <p className="mb-4 text-gray-700 text-[14px]">
                  We also automatically collect certain information about your
                  interaction with the Services (“Usage Data”). To do this, we
                  may use cookies, web beacons, or geolocation tracking
                  technologies, etc. (“Tracking Technologies”). Usage Data
                  includes:
                </p>
                <ul className="space-y-4 text-sm text-gray-700 list-disc list-inside">
                  <li>
                    <span className="font-bold">Device information,</span> such
                    as device type, operating system, unique device identifier,
                    and internet protocol (IP) address.
                  </li>
                  <li>
                    <span className="font-bold">Location information,</span>{" "}
                    such as approximate location / precise geolocation, if you
                    choose to provide it.
                  </li>
                  <li>
                    <span className="font-bold">
                      Other information regarding
                    </span>{" "}
                    your interaction with the Services, such as browser type,
                    log data, date and time stamps, clickstream data,
                    interactions with marketing emails, and ad impressions.
                  </li>
                </ul>
                <p className="mb-4 text-gray-700 text-[14px]">
                  We use Usage Data to tailor features and content to you,
                  market to you, provide you with offers or promotions, run
                  analytics, and better understand user interaction with the
                  Services. For more information on how we use Tracking
                  Technologies and your choices, see the section below, Cookies
                  and Other Tracking Technologies.
                </p>
                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Information Collected from Other Sources
                </h1>
                <p className="mb-4 text-gray-700 text-[14px]">
                  We may obtain information about you from outside sources,
                  including information that we collect directly from third
                  parties and information from third parties that you choose to
                  share with us. Such information includes:
                </p>
                <ul className="space-y-4 text-sm text-gray-700 list-disc list-inside">
                  <li>
                    <span className="font-bold">Analytics data</span> we receive
                    from analytics providers such as Pendo, UserPilot, Google
                    Analytics, Meta Insights.
                  </li>
                  <li>
                    <span className="font-bold">
                      Information we receive from career websites,
                    </span>{" "}
                    such as LinkedIn, Monster, or Indeed, which we use to
                    process your application for employment.
                  </li>
                  <li>
                    <span className="font-bold">
                      Information we receive from consumer marketing databases
                      or other data enrichment companies,
                    </span>{" "}
                    which we use to better customize advertising and marketing
                    to you.
                  </li>
                </ul>
                <p className="mt-4 mb-4 text-gray-700 text-[14px]">
                  Any information we receive from outside sources will be
                  treated in accordance with this Privacy Notice. We are not
                  responsible for the accuracy of the information provided to us
                  by third parties and are not responsible for any third party’s
                  policies or practices. For more information, see the section
                  below,{" "}
                  <span className="font-bold underline">
                    Third Party Websites and Links.
                  </span>
                </p>
                <p className="mt-4 mb-4 text-gray-700 text-[14px]">
                  In addition to the specific uses described above, we may use
                  any of the above information to provide you with the Services
                  and to maintain our business relationship with you, including
                  by enhancing the safety and security of our Services (e.g.,
                  troubleshooting, data analysis, testing, system maintenance,
                  and reporting), providing customer support, sending service
                  and other non-marketing communications, monitoring and
                  analyzing trends, conducting internal research and
                  development, complying with applicable legal obligations,
                  enforcing any applicable terms of service, and protecting the
                  Services, our rights, and the rights of our employees, users
                  or other individuals.
                </p>
                <p className="mt-4 mb-4 text-gray-700 text-[14px]">
                  Finally, we may deidentify or anonymize your information such
                  that it cannot reasonably be used to infer information about
                  you or otherwise be linked to you (“deidentified information”)
                  (or we may collect information that has already been
                  deidentified/anonymized), and we may use such deidentified
                  information for any purpose. To the extent we possess or
                  process any deidentified information, we will maintain and use
                  such information in deidentified/anonymized form and not
                  attempt to re-identify the information, except solely for the
                  purpose of determining whether our
                  deidentification/anonymization process satisfies legal
                  requirements.
                </p>

                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Cookies and Other Tracking Technologies
                </h1>
                <p className="mt-4 mb-4 text-gray-700 text-[14px]">
                  Most browsers accept cookies automatically, but you may be
                  able to control the way in which your devices permit the use
                  of Tracking Technologies. If you so choose, you may block or
                  delete our cookies from your browser; however, blocking or
                  deleting cookies may cause some of the Services, including
                  certain features and general functionality, to work
                  incorrectly. If you have questions regarding the specific
                  information about you that we process or retain, as well as
                  your choices regarding our collection and use practices,
                  please contact us using the information listed below.
                </p>
                <p className="mb-4 text-gray-700 text-[14px]">
                  To opt out of tracking by Google Analytics,{" "}
                  <span className="font-bold underline">click here.</span>
                </p>
                <p className="mb-4 text-gray-700 text-[14px]">
                  Your browser settings may allow you to transmit a “do not
                  track” signal, “opt-out preference” signal, or other mechanism
                  for exercising your choice regarding the collection of your
                  information when you visit various websites. Like many
                  websites, our website is not designed to respond to such
                  signals, and we do not use or disclose your information in any
                  way that would legally require us to recognize opt-out
                  preference signals. To learn more about “do not track”
                  signals, you can visit{" "}
                  <span className="font-bold">
                    http://www.allaboutdnt.com/.
                  </span>{" "}
                  To learn more about Global Privacy Control, you can visit{" "}
                  <span className="font-bold">
                    https://globalprivacycontrol.org/.
                  </span>
                </p>

                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Sharing of Mobile Information
                </h1>
                <p className="mt-4 mb-4 text-gray-700 text-[14px]">
                  No mobile information will be shared with third
                  parties/affiliates for marketing/promotional purposes. All
                  categories in this privacy policy exclude text messaging
                  originator opt-in data and consent; this information will not
                  be shared with any third parties.
                </p>

                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Opting Out of Text Communications
                </h1>
                <p className="mt-4 mb-4 text-gray-700 text-[14px]">
                  You may opt out of receiving text messages from AccuraCore at
                  any time. To stop receiving messages, reply “STOP” to any text
                  message. Upon doing so, you will be removed from our messaging
                  list. Message and data rates may apply based on your mobile
                  provider.
                </p>
              </div>

              <h1 className="text-[20px] font-[500] mt-10 mb-4">
                3. Disclosure of Your Information
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  We will only disclose your information to third parties as set
                  forth in this Privacy Notice, and only to the following
                  categories of third parties:
                </p>

                <ul className="space-y-4 text-sm text-gray-700 list-disc list-inside">
                  <li>Our affiliates or others within our corporate group..</li>
                  <li>
                    Vendors or other service providers who help us provide the
                    Services, including for system administration, cloud
                    storage, security, customer relationship management,
                    marketing services, communications, web analytics, payment
                    networks, and payment processing.
                  </li>
                  <li>Third parties for marketing purposes.</li>
                  <li>
                    Third parties to whom you request or direct us to disclose
                    information, such as through your use of social media
                    widgets or login integration.
                  </li>
                  <li>
                    Professional advisors, such as auditors, law firms, or
                    accounting firms.
                  </li>
                  <li>
                    Third parties in connection with or anticipation of an asset
                    sale, merger, or other business transaction, including in
                    the context of a bankruptcy.
                  </li>
                </ul>
                <p className="mb-4 text-gray-700 text-[14px]">
                  We may also disclose your information as needed to comply with
                  applicable law or any obligations thereunder or to cooperate
                  with law enforcement, judicial orders, and regulatory
                  inquiries, to enforce any applicable terms of service, and to
                  ensure the safety and security of our business, employees, and
                  users.
                </p>
                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Mobile Information Sharing
                </h1>
                <p className="mb-4 text-gray-700 text-[14px]">
                  No mobile information will be shared with third
                  parties/affiliates for marketing/promotional purposes. All
                  other categories exclude text messaging originator opt-in data
                  and consent; this information will not be shared with any
                  third parties.
                </p>
              </div>

              <h1 className="text-[20px] font-[500] mt-10 mb-4">
                4. Third-Party Websites and Links
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  We may provide links to third-party websites or platforms. If
                  you follow links to sites or platforms that we do not control
                  and are not affiliated with us, you should review the
                  applicable privacy notice, policies, and other terms. We are
                  not responsible for the privacy or security of, or information
                  found on, these sites or platforms. Information you provide on
                  public or semi-public venues, such as third-party social
                  networking platforms, may also be viewable by other users of
                  the Services and/or users of those third-party platforms
                  without limitation as to its use. Our inclusion of such links
                  does not, by itself, imply any endorsement of the content on
                  such platforms or of their owners or operators.
                </p>
              </div>

              <h1 className="text-[20px] font-[500] mt-10 mb-4">
                5. Children&apos;s Privacy
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  Children under the age of 14 are not permitted to use the
                  Services, and we do not seek or knowingly collect any personal
                  information about children under 14 years of age. If we become
                  aware that we have unknowingly collected information about a
                  child under 14 years of age, we will make commercially
                  reasonable efforts to delete such information. If you are the
                  parent or guardian of a child under 14 years of age who has
                  provided us with their personal information, you may contact
                  us using the below information to request that it be deleted.
                </p>
              </div>

              <h1 className="text-[20px] font-[500] mt-10 mb-4">
                6. Data Security and Retention
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  Despite our reasonable efforts to protect your information, no
                  security measures are impenetrable, and we cannot guarantee
                  “perfect security.” Any information you send to us
                  electronically, while using the Services or otherwise
                  interacting with us, may not be secure while in transit. We
                  recommend that you do not use unsecure channels to send us
                  sensitive or confidential information.
                </p>
                <p className="mb-4 text-gray-700 text-[14px]">
                  Where we use service providers who might have access to your
                  personal information, we select them carefully and require
                  them to have privacy and security standards that are
                  comparable to ours. We use contracts and other measures with
                  our service providers to maintain the confidentiality and
                  security of your personal information and to prevent it from
                  being used for any other purpose.
                </p>
                <p className="mb-4 text-gray-700 text-[14px]">
                  We retain your information for only as long as is reasonably
                  necessary for the purposes specified in this Privacy Notice.
                  When determining the length of time to retain your
                  information, we consider various criteria, including whether
                  we need the information to continue to provide you the
                  Services, resolve a dispute, enforce our contractual
                  agreements, prevent harm, promote safety, security and
                  integrity, or protect ourselves, including our rights,
                  property or products.
                </p>
              </div>

              <h1 className="text-[20px] font-[500] mt-10 mb-4">
                7. California Residents
              </h1>
              <div
                className="px-6 py-6 text-sm text-black leading-relaxed"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                }}
              >
                <p className="mb-4 text-gray-700 text-[14px]">
                  This section applies to you only if you are a user of the
                  AccuraCore website or apps and a California resident (“
                  <span className="font-bold">resident</span>” or “
                  <span className="font-bold">residents</span>”). For purposes
                  of this section, references to “personal information” shall
                  include “sensitive personal information,” as these terms are
                  defined under the California Consumer Privacy Act (“
                  <span className="font-bold">CCPA</span>”).
                </p>

                <h1 className="text-[17px] font-semibold mt-5 mb-3">
                  Processing of Personal Information
                </h1>
                <p className="mb-4 text-gray-700 text-[14px]">
                  In the preceding 12 months, we collected and (where indicated
                  below) disclosed for a business purpose the following
                  categories of personal information [and sensitive personal
                  information (denoted by *)] about residents:
                </p>

                {/* TWO COLS INNER LAYOUT */}
<div
  className="mt-6 p-6"
  style={{
    backgroundColor: "#F6F6F6",
    borderRadius: "20px",
  }}
>
  <div
    className="grid grid-cols-1 md:grid-cols-2 gap-6"
    style={{ gridAutoRows: "1fr" }}
  >
    {/* LEFT COLUMN */}
    <div className="grid grid-rows-5 gap-4">
      {/* Row 1 */}
      <div className="rounded-2xl overflow-hidden bg-white h-full flex flex-col">
        <div
          className="py-2 text-center text-white text-sm font-medium"
          style={{ backgroundColor: "#0061A4" }}
        >
          Mineral (Physical)
        </div>
        <div className="p-4 text-sm text-gray-700 flex-1">
          Personal information categories listed in the California Customer
          Records statute such as name, address, telephone number
        </div>
      </div>

      {/* Row 2 */}
      <div className="rounded-2xl bg-white p-4 text-sm text-gray-700 h-full">
        Internet or other similar network activity such as information regarding
        your interaction with the Platform
      </div>

      {/* Row 3 */}
      <div className="rounded-2xl bg-white p-4 text-sm text-gray-700 h-full">
        Geolocation data such as IP address
      </div>

      {/* Row 4 */}
      <div className="rounded-2xl bg-white p-4 text-sm text-gray-700 h-full">
        Professional or employment-related information such as title of
        profession, employer, professional background
      </div>

      {/* Row 5 */}
      <div className="rounded-2xl bg-white p-4 text-sm text-gray-700 h-full">
        Account access credentials* such as account log-in, financial account,
        debit card, or credit card number in combination with any required
        security or access code, password, or credentials allowing access to
        your account
      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div className="grid grid-rows-5 gap-4">
      {/* Row 1 */}
      <div className="rounded-2xl overflow-hidden bg-white h-full flex flex-col">
        <div
          className="py-2 text-center text-white text-sm font-medium"
          style={{ backgroundColor: "#555859" }}
        >
          Chemical
        </div>
        <div className="p-4 text-sm text-gray-700 flex-1">
          Affiliates, vendors and service providers, including for marketing
          purposes.
        </div>
      </div>

      {/* Row 2 */}
      <div className="rounded-2xl bg-white p-4 text-sm text-gray-700 h-full">
        Affiliates, vendors and service providers, including for marketing
        purposes.
      </div>

      {/* Row 3 */}
      <div className="rounded-2xl bg-white p-4 text-sm text-gray-700 h-full">
        Affiliates, vendors and service providers, including for marketing
        purposes.
      </div>

      {/* Row 4 */}
      <div className="rounded-2xl bg-white p-4 text-sm text-gray-700 h-full">
        Affiliates, vendors and service providers, including for marketing
        purposes.
      </div>

      {/* Row 5 */}
      <div className="rounded-2xl bg-white p-4 text-sm text-gray-700 h-full">
        Affiliates, vendors and service providers.
      </div>
    </div>
  </div>
</div>

              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}
