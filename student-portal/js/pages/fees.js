Router.register("fees", () => {
  const { fees } = AppData;

  const historyRows = fees.history.map(f => `
    <tr>
      <td>${f.date}</td>
      <td>${f.desc}</td>
      <td>${f.method}</td>
      <td style="font-weight:500">${f.amount}</td>
      <td><span class="event-tag et-paid">Paid</span></td>
    </tr>`).join("");

  return `
  <div class="page-heading">
    <h2>Fees &amp; payments</h2>
    <p>2025/2026 Academic Year · Semester 2</p>
  </div>

  <div class="three-col" style="margin-bottom:22px">
    <div class="fee-card">
      <div class="fee-card-label">Total fees</div>
      <div class="fee-amount dark">${fees.total}</div>
      <div class="fee-sub">Semester 2 · 2026</div>
    </div>
    <div class="fee-card">
      <div class="fee-card-label">Amount paid</div>
      <div class="fee-amount green">${fees.paid}</div>
      <div class="fee-sub">Last payment: Mar 12, 2026</div>
    </div>
    <div class="fee-card outstanding">
      <div class="fee-card-label">Outstanding balance</div>
      <div class="fee-amount red">${fees.balance}</div>
      <div class="fee-sub">Due by ${fees.dueDate}</div>
      <button class="btn btn-danger btn-sm" style="margin-top:12px" onclick="alert('Payment gateway coming soon!')">Pay now</button>
    </div>
  </div>

  <div class="card">
    <div class="card-head"><h3>Payment history</h3></div>
    <div class="results-table-wrap">
      <table class="results-table">
        <thead><tr><th>Date</th><th>Description</th><th>Method</th><th>Amount</th><th>Status</th></tr></thead>
        <tbody>${historyRows}</tbody>
      </table>
    </div>
  </div>`;
});
