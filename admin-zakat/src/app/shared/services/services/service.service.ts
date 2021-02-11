import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Form, FormGroup } from "@angular/forms";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { rectToPath } from "@amcharts/amcharts4/.internal/core/rendering/Path";

@Injectable({
  providedIn: "root",
})
export class ServicesService {
  // URL
  public botmanCategoryUrl: string = environment.baseUrl + "api/botcategory/";
  public liveChatUrl: string = environment.baseUrl + "api/livechat/";
  public reportUrl: string = environment.baseUrl + "api/giveReport";

  // Data
  public requests: any[] = [];

  constructor(private http: HttpClient) {}

  getBotCategories(): Observable<any> {
    let tempUrl = this.botmanCategoryUrl + "index";
    return this.http.get<any[]>(tempUrl).pipe(tap((res) => {}));
  }

  toggleLcSwitch(): Observable<any> {
    let tempUrl = this.liveChatUrl + "toggle";
    return this.http.post<any[]>(tempUrl, {}).pipe(tap((res) => {}));
  }

  checkToggle(): Observable<any> {
    let tempUrl = this.liveChatUrl + "checkToggle";
    return this.http.get<any[]>(tempUrl).pipe(tap((res) => {}));
  }

  toggleLcSwitch2(): Observable<any> {
    let tempUrl = this.liveChatUrl + "toggleLang";
    return this.http.post<any[]>(tempUrl, {}).pipe(tap((res) => {}));
  }

  checkToggle2(): Observable<any> {
    let tempUrl = this.liveChatUrl + "checkToggleLang";
    return this.http.get<any[]>(tempUrl).pipe(tap((res) => {}));
  }

  updateBotCategory(id: number, body: any): Observable<any> {
    let tempUrl = this.botmanCategoryUrl + "updateBotCategory";
    return this.http
      .post<any[]>(tempUrl, { name: body.value.name, id: id })
      .pipe(tap((res) => {}));
  }

  getClientChatNotification(): Observable<any> {
    let tempUrl = this.liveChatUrl + "clientMessage";
    return this.http.get<any[]>(tempUrl).pipe(tap((res) => {}));
  }

  receiveClientChat(): Observable<any> {
    let tempUrl = this.liveChatUrl + "getagentmsg";
    return this.http.get<any[]>(tempUrl).pipe(tap((res) => {}));
  }

  sendClientChat(message: string, userId: any): Observable<any> {
    let tempUrl = this.liveChatUrl + "agentMsg";
    return this.http
      .post<any[]>(tempUrl, { message: message, userId: userId })
      .pipe(tap((res) => {}));
  }

  getLiveChatNotification(): Observable<any> {
    let tempUrl = this.liveChatUrl + "index";
    return this.http.get<any[]>(tempUrl).pipe(tap((res) => {}));
  }

  acceptLiveRequest(): Observable<any> {
    let tempUrl = this.liveChatUrl + "accept";
    return this.http.post<any[]>(tempUrl, "").pipe(tap((res) => {}));
  }

  sendFeedback(message: string, userId: any): Observable<any> {
    let tempUrl = this.liveChatUrl + "sendFeedback";
    return this.http
      .post<any[]>(tempUrl, { message: message, userId: userId })
      .pipe(tap((res) => {}));
  }

  deleteBotCategory(id: number): Observable<any> {
    let tempUrl = this.botmanCategoryUrl + "deleteBotCategory";
    return this.http
      .post<any[]>(tempUrl, { id: id })
      .pipe(tap((res) => {}));
  }

  routeToSuperAdmin(): Observable<any> {
    let tempUrl = this.liveChatUrl + "routeToSuperAdmin";
    return this.http.post<any[]>(tempUrl, {}).pipe(tap((res) => {}));
  }

  dltAndNotifyClient(userId: any): Observable<any> {
    let tempUrl = this.liveChatUrl + "dltAndNotifyClient";
    return this.http
      .post<any[]>(tempUrl, { userId: userId })
      .pipe(tap((res) => {}));
  }

  addSubCategory(body: any): Observable<any> {
    let tempUrl = this.botmanCategoryUrl + "addSubCategory";

    return this.http.post<any[]>(tempUrl, body).pipe(tap((res) => {}));
  }

  giveReport(type, start, end, clientId = 0): Observable<any> {
    let tempUrl = this.reportUrl;

    return this.http
      .post<any[]>(tempUrl, {
        type: type,
        start: start,
        end: end,
        client: clientId,
      })
      .pipe(tap((res) => {}));
  }

  createBotCategory(body: any): Observable<any> {
    let tempUrl = this.botmanCategoryUrl + "createCategory";
    //console.log(body);

    return this.http.post<any[]>(tempUrl, body.value).pipe(tap((res) => {}));
  }
}
