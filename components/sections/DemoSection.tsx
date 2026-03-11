export default function DemoSection() {
  return (
    <section id="leadwing-demo">
      <div className="lw-wrapper">
        {/* Header */}
        <div className="lw-header">
          <div className="lw-header-eyebrow">
            Leadwing &middot; Lead Infrastructure
          </div>
          <h1>
            The conversation your customer has.
            <br />
            <em>The outcome your franchisee receives.</em>
          </h1>
          <p className="lw-header-sub">
            Two sides of the same 90-second window.
          </p>
        </div>

        {/* Split panel */}
        <div className="lw-split">
          {/* LEFT — Customer view */}
          <div className="lw-panel lw-panel-left">
            <div className="lw-panel-label">
              <div className="lw-panel-label-dot" />
              <span>What the customer sees</span>
            </div>

            <div className="lw-chat-window">
              <div className="lw-chat-header">
                <div className="lw-chat-avatar">S</div>
                <div className="lw-chat-header-info">
                  <strong>Aria</strong>
                  <span>Apex Waterproofing &middot; 24/7</span>
                </div>
                <div className="lw-chat-status" />
              </div>

              <div className="lw-chat-body">
                <div className="lw-chat-timestamp">
                  Saturday &middot; 7:18 AM
                </div>

                <div className="lw-msg lw-bot">
                  <div className="lw-msg-avatar">S</div>
                  <div className="lw-msg-wrap">
                    <div className="lw-msg-bubble">
                      Hey, I&apos;m Aria! I can connect you with your local
                      waterproofing specialist — what would you like to do?
                    </div>
                    <div className="lw-msg-time">7:18 AM</div>
                  </div>
                </div>

                <div className="lw-msg lw-user">
                  <div className="lw-msg-wrap">
                    <div className="lw-msg-bubble">Get a free quote</div>
                    <div className="lw-msg-time">7:18 AM</div>
                  </div>
                </div>

                <div className="lw-msg lw-bot">
                  <div className="lw-msg-avatar">S</div>
                  <div className="lw-msg-wrap">
                    <div className="lw-msg-bubble">
                      What area are you looking to get waterproofed? For example
                      — a bathroom, balcony, retaining wall?
                    </div>
                    <div className="lw-msg-time">7:18 AM</div>
                  </div>
                </div>

                <div className="lw-msg lw-user">
                  <div className="lw-msg-wrap">
                    <div className="lw-msg-bubble">bathroom</div>
                    <div className="lw-msg-time">7:19 AM</div>
                  </div>
                </div>

                <div className="lw-msg lw-bot">
                  <div className="lw-msg-avatar">S</div>
                  <div className="lw-msg-wrap">
                    <div className="lw-msg-bubble">
                      Perfect — to help your local franchisee prepare an accurate
                      quote, would you like to answer a few quick questions now,
                      or would you rather just speak to the team directly?
                    </div>
                    <div className="lw-msg-time">7:19 AM</div>
                  </div>
                </div>

                <div className="lw-msg lw-user">
                  <div className="lw-msg-wrap">
                    <div className="lw-msg-bubble">
                      Answer a couple questions
                    </div>
                    <div className="lw-msg-time">7:19 AM</div>
                  </div>
                </div>

                <div className="lw-msg lw-bot">
                  <div className="lw-msg-avatar">S</div>
                  <div className="lw-msg-wrap">
                    <div className="lw-msg-bubble">
                      Awesome. What suburb are you in? I&apos;ll find your
                      nearest Apex Waterproofing franchisee.
                    </div>
                    <div className="lw-msg-time">7:19 AM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="lw-divider">
            <div className="lw-divider-dot">vs</div>
          </div>

          {/* RIGHT — Business view */}
          <div className="lw-panel lw-panel-right">
            <div className="lw-panel-label">
              <div className="lw-panel-label-dot" />
              <span>What the franchisee receives</span>
            </div>

            <div className="lw-timing-badge">
              <div className="lw-timing-badge-dot" />
              <span>Delivered in 87 seconds &middot; No admin involved</span>
            </div>

            <div className="lw-notifications">
              {/* SMS card */}
              <div className="lw-sms-card">
                <div className="lw-sms-card-header">
                  <div className="lw-sms-card-header-left">
                    <div className="lw-sms-icon">💬</div>
                    <span className="lw-sms-label">
                      SMS &middot; Instant notification
                    </span>
                  </div>
                  <span className="lw-sms-time">7:19 AM</span>
                </div>
                <div className="lw-sms-body">
                  <div className="lw-sms-title">
                    🔔 New Apex Waterproofing Lead
                  </div>
                  <div className="lw-sms-fields">
                    <div className="lw-sms-field">
                      <span className="lw-sms-field-key">Customer</span>
                      <span className="lw-sms-field-val">
                        Sarah Mitchell &middot;{" "}
                        <span className="lw-link">0412 388 204</span>
                      </span>
                    </div>
                    <div className="lw-sms-field">
                      <span className="lw-sms-field-key">Location</span>
                      <span className="lw-sms-field-val">
                        14 Roscoe St, Bondi Beach
                      </span>
                    </div>
                    <div className="lw-sms-field">
                      <span className="lw-sms-field-key">Service</span>
                      <span className="lw-sms-field-val">
                        Internal bathroom waterproofing
                      </span>
                    </div>
                    <div className="lw-sms-field">
                      <span className="lw-sms-field-key">Shower</span>
                      <span className="lw-sms-field-val">
                        Standard 900×900 &middot; Windows built in
                      </span>
                    </div>
                    <div className="lw-sms-field">
                      <span className="lw-sms-field-key">Bath type</span>
                      <span className="lw-sms-field-val">Freestanding</span>
                    </div>
                    <div className="lw-sms-field">
                      <span className="lw-sms-field-key">Rooms</span>
                      <span className="lw-sms-field-val">1 bathroom</span>
                    </div>
                    <div className="lw-sms-field">
                      <span className="lw-sms-field-key">Wastes</span>
                      <span className="lw-sms-field-val">Not required</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email card */}
              <div className="lw-email-card">
                <div className="lw-email-header-bar">
                  <h3>New Lead — Action Required</h3>
                  <p>Respond ASAP for best results</p>
                </div>
                <div className="lw-email-body">
                  <div className="lw-email-section-title">Customer Details</div>
                  <div className="lw-email-fields">
                    <div className="lw-email-field">
                      <span className="lw-email-field-key">Name</span>
                      <span className="lw-email-field-val">Sarah Mitchell</span>
                    </div>
                    <div className="lw-email-field">
                      <span className="lw-email-field-key">Phone</span>
                      <span className="lw-email-field-val">0412 388 204</span>
                    </div>
                    <div className="lw-email-field">
                      <span className="lw-email-field-key">Address</span>
                      <span className="lw-email-field-val">
                        14 Roscoe St, Bondi Beach
                      </span>
                    </div>
                  </div>
                  <div className="lw-email-section-title">Job Details</div>
                  <div className="lw-email-fields">
                    <div className="lw-email-field">
                      <span className="lw-email-field-key">Service</span>
                      <span className="lw-email-field-val">
                        Internal waterproofing
                      </span>
                    </div>
                    <div className="lw-email-field">
                      <span className="lw-email-field-key">Bath type</span>
                      <span className="lw-email-field-val">Freestanding</span>
                    </div>
                    <div className="lw-email-field">
                      <span className="lw-email-field-key">Shower size</span>
                      <span className="lw-email-field-val">
                        Standard 900×900
                      </span>
                    </div>
                    <div className="lw-email-field">
                      <span className="lw-email-field-key">Features</span>
                      <span className="lw-email-field-val">
                        Windows built in
                      </span>
                    </div>
                    <div className="lw-email-field">
                      <span className="lw-email-field-key">Room count</span>
                      <span className="lw-email-field-val">1 bathroom</span>
                    </div>
                  </div>
                  <div className="lw-email-cta">
                    <span>📞</span>
                    <span>
                      Call <strong>Sarah Mitchell</strong> on{" "}
                      <strong>0412 388 204</strong> ASAP.
                    </span>
                  </div>
                </div>
                <div className="lw-email-footer">
                  <span>Powered by Leadwing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer stats */}
        <div className="lw-demo-footer">
          <div className="lw-footer-stat">
            <div className="lw-footer-stat-num">87s</div>
            <div className="lw-footer-stat-label">Enquiry to lead card</div>
          </div>
          <div className="lw-footer-divider" />
          <div className="lw-footer-stat">
            <div className="lw-footer-stat-num">0</div>
            <div className="lw-footer-stat-label">Admin touchpoints</div>
          </div>
          <div className="lw-footer-divider" />
          <div className="lw-footer-stat">
            <div className="lw-footer-stat-num">24/7</div>
            <div className="lw-footer-stat-label">Including weekends</div>
          </div>
          <div className="lw-footer-divider" />
          <div className="lw-footer-stat">
            <div className="lw-footer-stat-num">100%</div>
            <div className="lw-footer-stat-label">
              Qualified before delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
