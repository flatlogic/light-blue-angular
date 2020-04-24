import { format } from 'date-fns';

export interface DefaultWidgedData {
  value: string;
  class?: string | string[];
}

export const initialDefaultWidgetData: DefaultWidgedData[] = [
  { value: 'A timestamp this widget was created: Apr 24, 19:07:07' },
  { value: 'A timestamp this widget was updated: Apr 24, 19:07:07' }

];

export const updatedDefaultWidgetData: DefaultWidgedData[] = [
  { value: 'Simulating latency with tiny php block on the server-side.', class: 'text-muted' },
  ...initialDefaultWidgetData,
];

export interface SharesWidgetData {
  class?: string | string[];
  icon: string;
  name: string;
  time: string;
  iconClass?: string | string[];
}

export const initialSharesWidgetData: SharesWidgetData[] = [
  {
    icon: 'assets/img/people/a1.jpg',
    name: 'Maikel Basso',
    time: 'about 2 mins ago',
    iconClass: 'text-danger'
  },
  {
    icon: 'assets/img/people/a2.jpg',
    name: 'Ianus Arendse',
    time: 'about 42 mins ago',
    iconClass: 'text-info'
  },
  {
    icon: 'assets/img/people/a3.jpg',
    name: 'Valdemar Landau',
    time: 'one hour ago',
    iconClass: 'text-success'
  },
  {
    icon: 'assets/img/people/a4.jpg',
    name: 'Rick Teagan',
    time: '3 hours ago',
    iconClass: 'text-warning'
  }
];

export const updatedSharedWidgetData: SharesWidgetData[] = [
  {
    class: ['animated', 'fadeInDown', 'bg-danger'],
    icon: 'assets/img/people/a6.jpg',
    name: 'Jenny Wilington',
    time: 'just now',
    iconClass: ['text-success', 'mt-sm']
  },
  ...initialSharesWidgetData,
];

export const initialAutoloadWidgetData: string = `
<h3 class="text-center m-0">Sign up, it's <strong>free</strong></h3>
      <p class="lead text-muted text-center">
        Faith makes it possible to achieve that which man's mind can conceive and believe.
      </p>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1"><i class="fa fa-circle text-warning"></i> &nbsp; Email address</label>
          <input type="email" class="form-control input-transparent" id="exampleInputEmail1" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="pswd"><i class="fa fa-circle text-danger"></i> &nbsp; Password</label>
          <input class="form-control input-transparent" id="pswd" type="text" placeholder="Min 8 characters">
        </div>
        <p>
          To make a widget automatically load it's content you just need to set
          <strong>data-widgster-autoload</strong> attribute and provide an url.
        </p>
        <pre><code>data-widgster-load="server/ajax_widget.html"
data-widgster-autoload="true"</code></pre>
        <p>
          <strong>data-widgster-autoload</strong> may be set to an integer value. If set, for example, to
          2000 will refresh widget every 2 seconds.
        </p>
        <div class="clearfix">
          <div class="btn-toolbar float-right">
            <button type="button" class="btn btn-transparent">Cancel</button>
            <button type="button" class="btn btn-success">&nbsp;Submit&nbsp;</button>
          </div>
        </div>
      </form>`;

export const updatedAutoloadWidgetData: string = `
      <h3 class="text-center no-margin animated bounceInDown">Sign up, <del>it's <strong>free</strong></del> and get <strong>$50 now!</strong></h3>
<p class="lead text-muted text-center">
    Faith makes it possible to achieve that which man's mind can conceive and believe.
</p>
<form>

    <div class="form-group">
        <label for="exampleInputEmail1"><i class="fa fa-circle text-warning"></i> &nbsp; Email address</label>
        <input type="email" class="form-control input-transparent" id="exampleInputEmail1"
               placeholder="Enter email">
    </div>
    <div class="form-group">
        <label for="pswd"><i class="fa fa-circle text-danger"></i> &nbsp; Password</label>
        <input class="form-control input-transparent" id="pswd" type="text" placeholder="Min 8 characters">
    </div>
    <p>
        To make a widget automatically load it's content you just need to set
        <strong>data-widgster-autoload</strong> attribute and provide an url.
    </p>
    <pre><code>data-widgster-load="server/ajax_widget.php"
data-widgster-autoload="true"</code></pre>
    <p>
        <strong>data-widgster-autoload</strong> may be set to an integer value. If set, for example, to
    2000 will refresh widget every 2 seconds.
    </p>
    <div class="clearfix">
        <div class="btn-toolbar float-right">
            <button type="submit" class="btn btn-transparent">Cancel</button>
            <button type="submit" class="btn btn-success animated wobble">&nbsp;Submit&nbsp;</button>
        </div>
    </div>
</form>`;

export interface NewsWidgetData {
  class?: string | string[];
  icon: string;
  iconClass?: string | string[];
  title: string;
  body: string;
  time: string;
}

export const initialNewsWidgetData: NewsWidgetData[] = [
  {
    iconClass: 'bg-danger',
    icon: 'fa-star',
    title: 'First Human Colony on Mars',
    body: 'First 700 people will take part in building first human settlement outside of Earth. That\'s awesome, right?',
    time: 'Mar 20, 18:46'
  },
  {
    iconClass: 'bg-info',
    icon: 'fa-microphone',
    title: 'Light Blue reached $300',
    body: 'Light Blue Inc. shares just hit $300 price. "This was inevitable. It should have happen sooner or later" - says NYSE expert.',
    time: 'Sep 25, 11:59'
  },
  {
    iconClass: 'bg-success',
    icon: 'fa-eye',
    title: 'No more spying',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    time: 'Mar 20, 18:46'
  }
];

export const updatedNewsWidgetData: NewsWidgetData[] = [
  {
    class: ['animated', 'fadeInDown', 'bg-danger'],
    iconClass: 'bg-warning',
    icon: 'fa-lock',
    title: 'Just now! Check update time',
    body: 'Check this news item timestamp. There is a small server part that generates current timestamp so it would be easier for you to see ajax widgets in action',
    time: format(new Date(), 'MMM d, H:mm')
  },
  ...initialNewsWidgetData
];
