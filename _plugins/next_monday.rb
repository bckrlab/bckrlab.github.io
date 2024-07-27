module Jekyll
    module NextMondayFilter
      def next_monday(date = nil)
        date ||= Time.now
        days_until_monday = (1 - date.wday + 7) % 7
        next_monday_date = date + (days_until_monday * 24 * 60 * 60)
        next_monday_date.strftime("%d.%m.%Y")
      end
    end
  end
  
  Liquid::Template.register_filter(Jekyll::NextMondayFilter)