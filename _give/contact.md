---
title: Contact
staff:
- name: Luke Cherry
  title: Vice President of Development
  email: lcherry@masters.edu
  phone: "(661) 362-2603"
- name: Boyd Johnson
  title: Planned Giving Officer
  email: bjohnson@masters.edu
  phone: "(661) 362-2659"
- name: Jason Semelsberger
  title: Development Officer (In-state)
  email: jsemelsberger@masters.edu
  phone: "(661) 362-2337"
- name: Ryan Zamroz
  title: Development Officer (Out-of-state)
  email: rzamroz@masters.edu
  phone: "(661) 362 2336"
- name: Jon Popadics
  title: Development Officer
  email: jpopadics@masters.edu
  phone: "(661) 362-2656"
- name: Vanessa Park
  title: Administrative Assistant
  email: vpark@masters.edu
  phone: "(661) 362-2210"
---

<h1>Contact</h1>
The Master's University - Development<br>
21726 Placerita Canyon Rd.<br>
Santa Clarita, CA 91321


  <table>
  {% for staff in page.staff %}
  <tr>
    <td>{{ staff.name }}<br>
    {{ staff.title }}</td>
    <td><a href="mailto:{{ staff.email }}">{{ staff.email }}</a></td>
    <td>{{ staff.phone }}</td>
  </tr>
  {% endfor %}
  </table>
