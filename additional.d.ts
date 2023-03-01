type Politician = {
  id: number;
  label: string;
  party: Party;
  occupations: string[];
  sidejobs: Sidejob;
  cvs: Cvs;
  abgeordnetenwatch_url: string;
  weblinks: Weblinks;
  votes_and_polls: VoteAndPoll;
  topic_ids_of_latest_committee: number[];
};

type Party = {
  id: number;
  label: string;
  party_style: PartyStyle;
};

type PartyStyle = {
  id: number;
  display_name: string;
  foreground_color: string;
  background_color: string;
  border_color: string;
};

type PartyTag = {
  party: Party,

};

type Cvs = {
  id: number;
  short_description: string;
  politician_id: number;
  raw_text: string;
};

type Weblinks = {
  politician_id: number;
  link: string;
  id: number;
};

type Sidejob = {
  id: number;
  label: string;
  income_level: string;
  interval: string;
  created: Date;
  sidejob_organization: SidejobOrganization;
};

type SidejobOrganization = {
  id: number;
  label: string;
};

type VoteAndPoll = {
  Vote: Vote;
  Poll: Poll;
};

type Vote = {
  id: number;
  entity_type: string;
  label: string;
  api_url: string;
  mandate_id: number;
  fraction_id: number;
  poll_id: number;
  vote: string;
  reason_no_show: string;
  reason_no_show_other: string;
};

type Poll = {
  id: number;
  label: string;
  field_intro: string;
  field_poll_date: Date;
  poll_passed: boolean;
};

type Topic_ids_of_latest_committee = number[];

type Position = {
  id: number;
  position: string;
  reason: string;
  position_statement: {
    statement: string;
  };
};

type Search = {
  id: number;
  label: string;
  party: Party;
};

type Votes = {
  vote: Vote;
  poll: Poll;
  total: number;
  page: number;
  size: number;
};

type Vote = {
  id: number;
  entity_type: string;
  label: string;
  api_url: string;
  mandate_id: number;
  fraction_id: number;
  poll_id: number;
  vote: string;
  reason_no_show: string;
  reason_no_show_other: string;
};

type Poll = {
  id: number;params
  label: string;
  field_intro: string;
  field_poll_date: Date;
  poll_passed: boolean;
};

type Constituencies = {
  constituency_number: number;
  constituency_name: string;
  politicians: Politician;
};

type Poll_results = {
  id: number;
  poll_id: number;
  fraction: {
    id: number;
    full_name: string;
    short_name: string;
    label: string;
  };
  total_yes: number;
  total_no: number;
  total_abstain: number;
  total_no_show: number;
};

type Poll_links = {
  uri: string;
  title: string;
};

type News =     {
    id: string;
    highlight: string;
    images: Image
    published: Date;
    source: string;
    title: string;
    url: string
}

type Image = {
      url: string;
      title: string;
      height: number;
      width: number
}
